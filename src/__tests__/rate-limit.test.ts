import { describe, it, expect, beforeEach, vi } from 'vitest';
import { checkRateLimit, getClientIp, type RateLimitConfig } from '@/lib/rate-limit';

describe('checkRateLimit', () => {
  const config: RateLimitConfig = {
    limit: 3,
    windowMs: 60000, // 1 minute
  };

  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('allows requests under the limit', () => {
    const identifier = 'test-user-1';

    const result1 = checkRateLimit(identifier, config);
    expect(result1.success).toBe(true);
    expect(result1.remaining).toBe(2);

    const result2 = checkRateLimit(identifier, config);
    expect(result2.success).toBe(true);
    expect(result2.remaining).toBe(1);

    const result3 = checkRateLimit(identifier, config);
    expect(result3.success).toBe(true);
    expect(result3.remaining).toBe(0);
  });

  it('blocks requests over the limit', () => {
    const identifier = 'test-user-2';

    // Use up all allowed requests
    checkRateLimit(identifier, config);
    checkRateLimit(identifier, config);
    checkRateLimit(identifier, config);

    // Fourth request should be blocked
    const result = checkRateLimit(identifier, config);
    expect(result.success).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it('resets after the time window expires', () => {
    const identifier = 'test-user-3';

    // Use up all allowed requests
    checkRateLimit(identifier, config);
    checkRateLimit(identifier, config);
    checkRateLimit(identifier, config);

    // Verify blocked
    expect(checkRateLimit(identifier, config).success).toBe(false);

    // Advance time past the window
    vi.advanceTimersByTime(config.windowMs + 1);

    // Should be allowed again
    const result = checkRateLimit(identifier, config);
    expect(result.success).toBe(true);
    expect(result.remaining).toBe(2);
  });

  it('tracks different identifiers separately', () => {
    const user1 = 'user-a';
    const user2 = 'user-b';

    // Use up user1's limit
    checkRateLimit(user1, config);
    checkRateLimit(user1, config);
    checkRateLimit(user1, config);

    // User1 should be blocked
    expect(checkRateLimit(user1, config).success).toBe(false);

    // User2 should still be allowed
    expect(checkRateLimit(user2, config).success).toBe(true);
  });

  it('returns correct rate limit info', () => {
    const identifier = 'test-user-4';

    const result = checkRateLimit(identifier, config);

    expect(result.limit).toBe(config.limit);
    expect(result.remaining).toBe(config.limit - 1);
    expect(result.resetTime).toBeGreaterThan(Date.now());
  });
});

describe('getClientIp', () => {
  it('extracts IP from x-forwarded-for header', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-forwarded-for': '192.168.1.1, 10.0.0.1' },
    });
    expect(getClientIp(request)).toBe('192.168.1.1');
  });

  it('extracts IP from x-real-ip header', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-real-ip': '10.0.0.50' },
    });
    expect(getClientIp(request)).toBe('10.0.0.50');
  });

  it('extracts IP from x-vercel-forwarded-for header', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-vercel-forwarded-for': '203.0.113.42' },
    });
    expect(getClientIp(request)).toBe('203.0.113.42');
  });

  it('prioritizes x-forwarded-for over other headers', () => {
    const request = new Request('http://localhost', {
      headers: {
        'x-forwarded-for': '1.1.1.1',
        'x-real-ip': '2.2.2.2',
        'x-vercel-forwarded-for': '3.3.3.3',
      },
    });
    expect(getClientIp(request)).toBe('1.1.1.1');
  });

  it('returns "unknown" when no IP headers present', () => {
    const request = new Request('http://localhost');
    expect(getClientIp(request)).toBe('unknown');
  });

  it('trims whitespace from forwarded IPs', () => {
    const request = new Request('http://localhost', {
      headers: { 'x-forwarded-for': '  192.168.1.1  , 10.0.0.1' },
    });
    expect(getClientIp(request)).toBe('192.168.1.1');
  });
});
