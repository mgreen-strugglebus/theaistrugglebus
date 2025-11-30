import { test, expect } from '@playwright/test';

test.describe('AI Readiness Quiz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/resources/quiz');
  });

  test('quiz page loads correctly', async ({ page }) => {
    // Should show quiz content
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Should have a start or first question visible
    const content = await page.textContent('body');
    expect(content).toMatch(/quiz|ready|assessment|question/i);
  });

  test('can progress through quiz questions', async ({ page }) => {
    // Look for answer buttons or options
    const firstOption = page.getByRole('button').first();

    if (await firstOption.isVisible()) {
      await firstOption.click();

      // Should either show next question or progress
      await page.waitForTimeout(500);

      // Page should still be functional
      await expect(page).toHaveURL(/\/resources\/quiz/);
    }
  });

  test('quiz does not make network requests to store data', async ({ page }) => {
    const apiCalls: string[] = [];

    page.on('request', (request) => {
      if (request.url().includes('/api/')) {
        apiCalls.push(request.url());
      }
    });

    // Interact with the quiz
    await page.goto('/resources/quiz');

    // Try clicking through some options
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < Math.min(count, 3); i++) {
      const button = buttons.nth(i);
      if (await button.isVisible()) {
        await button.click();
        await page.waitForTimeout(300);
      }
    }

    // Should not have made any API calls (quiz is client-side only)
    const quizApiCalls = apiCalls.filter((url) => url.includes('quiz'));
    expect(quizApiCalls).toHaveLength(0);
  });

  test('quiz is accessible', async ({ page }) => {
    // Check for proper heading structure
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();

    // Check buttons are focusable
    const buttons = page.getByRole('button');
    const firstButton = buttons.first();

    if (await firstButton.isVisible()) {
      await firstButton.focus();
      await expect(firstButton).toBeFocused();
    }
  });
});
