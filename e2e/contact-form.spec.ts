import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a page with the contact form (book page has it)
    await page.goto('/book');
  });

  test('contact form is visible and has required fields', async ({ page }) => {
    // Check form fields are present
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /submit|send|get started/i })).toBeVisible();
  });

  test('shows validation errors for empty submission', async ({ page }) => {
    // Try to submit empty form
    const submitButton = page.getByRole('button', { name: /submit|send|get started/i });
    await submitButton.click();

    // HTML5 validation should prevent submission
    // Check that required fields show validation
    const nameInput = page.getByLabel(/name/i);
    const isInvalid = await nameInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });

  test('shows validation error for invalid email', async ({ page }) => {
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('not-an-email');

    const submitButton = page.getByRole('button', { name: /submit|send|get started/i });
    await submitButton.click();

    // HTML5 email validation should show error
    const emailInput = page.getByLabel(/email/i);
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });

  test('form fields accept valid input', async ({ page }) => {
    // Fill in the form with valid data
    await page.getByLabel(/name/i).fill('Test User');
    await page.getByLabel(/email/i).fill('test@example.com');

    // Check if company field exists and fill it
    const companyField = page.getByLabel(/company/i);
    if (await companyField.isVisible()) {
      await companyField.fill('Test Company');
    }

    // Check values were entered
    await expect(page.getByLabel(/name/i)).toHaveValue('Test User');
    await expect(page.getByLabel(/email/i)).toHaveValue('test@example.com');
  });

  test('form is accessible', async ({ page }) => {
    // All form inputs should have associated labels
    const nameInput = page.getByLabel(/name/i);
    await expect(nameInput).toHaveAttribute('id');

    const emailInput = page.getByLabel(/email/i);
    await expect(emailInput).toHaveAttribute('id');

    // Submit button should be keyboard accessible
    const submitButton = page.getByRole('button', { name: /submit|send|get started/i });
    await submitButton.focus();
    await expect(submitButton).toBeFocused();
  });
});

test.describe('Contact Form API', () => {
  test('API returns proper error for invalid request', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test',
        // missing required fields
      },
    });

    expect(response.status()).toBe(400);
    const data = await response.json();
    expect(data.error).toBe('Validation failed');
  });

  test('API returns rate limit headers', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test User',
        email: 'test@example.com',
        source: 'contact',
      },
    });

    // Check for rate limit headers
    expect(response.headers()['x-ratelimit-limit']).toBeDefined();
    expect(response.headers()['x-ratelimit-remaining']).toBeDefined();
  });

  test('API rejects oversized payloads', async ({ request }) => {
    const largeMessage = 'x'.repeat(15000); // Larger than 10KB limit

    const response = await request.post('/api/contact', {
      data: {
        name: 'Test',
        email: 'test@example.com',
        message: largeMessage,
        source: 'contact',
      },
    });

    expect(response.status()).toBe(413);
  });
});
