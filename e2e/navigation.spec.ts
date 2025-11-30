import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/AI Struggle Bus/i);
  });

  test('can navigate to main pages', async ({ page }) => {
    await page.goto('/');

    // Test navigation to Solutions
    await page.getByRole('link', { name: /solutions/i }).first().click();
    await expect(page).toHaveURL(/\/solutions/);

    // Test navigation to Assessment
    await page.goto('/');
    await page.getByRole('link', { name: /assessment/i }).first().click();
    await expect(page).toHaveURL(/\/assessment/);

    // Test navigation to About
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).first().click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('footer links work correctly', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check privacy link exists
    const privacyLink = page.getByRole('link', { name: /privacy/i });
    await expect(privacyLink).toBeVisible();

    // Check terms link exists
    const termsLink = page.getByRole('link', { name: /terms/i });
    await expect(termsLink).toBeVisible();
  });

  test('pages load without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    const pages = ['/', '/solutions', '/assessment', '/about', '/resources'];
    for (const path of pages) {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
    }

    // Filter out known acceptable errors (like 3rd party scripts)
    const criticalErrors = errors.filter(
      (e) => !e.includes('third-party') && !e.includes('analytics')
    );
    expect(criticalErrors).toHaveLength(0);
  });
});

test.describe('Security Headers', () => {
  test('includes required security headers', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers() || {};

    expect(headers['x-frame-options']).toBe('DENY');
    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
    expect(headers['content-security-policy']).toBeDefined();
  });

  test('includes HSTS header', async ({ page }) => {
    const response = await page.goto('/');
    const headers = response?.headers() || {};

    // HSTS should be present for production security
    expect(headers['strict-transport-security']).toBeDefined();
  });
});
