import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

// Mock the database module
vi.mock('@/lib/db', () => ({
  createContact: vi.fn().mockResolvedValue({ id: 1 }),
}));

// Mock the email module
vi.mock('@/lib/email', () => ({
  sendContactNotification: vi.fn().mockResolvedValue({ id: 'email-123' }),
}));

// Helper to create a mock request
function createMockRequest(
  body: Record<string, unknown>,
  options: { headers?: Record<string, string> } = {}
): NextRequest {
  const bodyString = JSON.stringify(body);
  return new NextRequest('http://localhost:3737/api/contact', {
    method: 'POST',
    body: bodyString,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': String(bodyString.length),
      'x-forwarded-for': `192.168.1.${Math.floor(Math.random() * 255)}`, // Random IP to avoid rate limiting
      ...options.headers,
    },
  });
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('accepts valid contact submission', async () => {
    const request = createMockRequest({
      name: 'John Doe',
      email: 'john@example.com',
      source: 'contact',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toContain('Thank you');
  });

  it('accepts submission with all optional fields', async () => {
    const request = createMockRequest({
      name: 'Jane Smith',
      email: 'jane@example.com',
      company: 'ACME Corp',
      phone: '555-1234',
      message: 'I would like to learn more about your services.',
      source: 'assessment',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it('rejects missing required fields', async () => {
    const request = createMockRequest({
      name: 'John Doe',
      // missing email and source
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Validation failed');
    expect(data.details).toBeDefined();
    expect(data.details.some((e: { field: string }) => e.field === 'email')).toBe(true);
    expect(data.details.some((e: { field: string }) => e.field === 'source')).toBe(true);
  });

  it('rejects invalid email format', async () => {
    const request = createMockRequest({
      name: 'John Doe',
      email: 'not-an-email',
      source: 'contact',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Validation failed');
    expect(data.details.some((e: { field: string }) => e.field === 'email')).toBe(true);
  });

  it('rejects invalid source', async () => {
    const request = createMockRequest({
      name: 'John Doe',
      email: 'john@example.com',
      source: 'invalid-source',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Validation failed');
    expect(data.details.some((e: { field: string }) => e.field === 'source')).toBe(true);
  });

  it('rejects non-object body', async () => {
    const bodyString = JSON.stringify([1, 2, 3]);
    const request = new NextRequest('http://localhost:3737/api/contact', {
      method: 'POST',
      body: bodyString,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': String(bodyString.length),
        'x-forwarded-for': '192.168.99.99',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Request body must be a JSON object');
  });

  it('rejects invalid JSON', async () => {
    const request = new NextRequest('http://localhost:3737/api/contact', {
      method: 'POST',
      body: 'not valid json',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '15',
        'x-forwarded-for': '192.168.88.88',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid JSON in request body');
  });

  it('rejects oversized request body', async () => {
    const request = createMockRequest(
      { name: 'test' },
      { headers: { 'Content-Length': '20000' } }
    );

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(413);
    expect(data.error).toBe('Request body too large');
  });

  it('includes rate limit headers in response', async () => {
    const request = createMockRequest({
      name: 'John Doe',
      email: 'john@example.com',
      source: 'contact',
    });

    const response = await POST(request);

    expect(response.headers.get('X-RateLimit-Limit')).toBeDefined();
    expect(response.headers.get('X-RateLimit-Remaining')).toBeDefined();
    expect(response.headers.get('X-RateLimit-Reset')).toBeDefined();
  });

  it('rate limits excessive requests', async () => {
    const ip = '192.168.200.200';

    // Make 6 requests (limit is 5)
    for (let i = 0; i < 5; i++) {
      const request = createMockRequest(
        { name: 'John Doe', email: 'john@example.com', source: 'contact' },
        { headers: { 'x-forwarded-for': ip } }
      );
      await POST(request);
    }

    // 6th request should be rate limited
    const request = createMockRequest(
      { name: 'John Doe', email: 'john@example.com', source: 'contact' },
      { headers: { 'x-forwarded-for': ip } }
    );
    const response = await POST(request);

    expect(response.status).toBe(429);
    expect(response.headers.get('Retry-After')).toBeDefined();
  });

  it('does not expose internal IDs in response', async () => {
    const request = createMockRequest({
      name: 'John Doe',
      email: 'john@example.com',
      source: 'contact',
    });

    const response = await POST(request);
    const data = await response.json();

    expect(data.id).toBeUndefined();
    expect(data.contactId).toBeUndefined();
  });

  it('continues successfully even if email fails', async () => {
    const { sendContactNotification } = await import('@/lib/email');
    vi.mocked(sendContactNotification).mockRejectedValueOnce(new Error('Email failed'));

    const request = createMockRequest({
      name: 'John Doe',
      email: 'john@example.com',
      source: 'contact',
    });

    const response = await POST(request);
    const data = await response.json();

    // Should still return success
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });
});
