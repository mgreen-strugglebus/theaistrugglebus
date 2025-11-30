import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock environment variables for testing
vi.stubEnv('RESEND_API_KEY', 'test-api-key');
vi.stubEnv('POSTGRES_URL', 'postgres://test:test@localhost:5432/test');

// Reset mocks between tests
beforeEach(() => {
  vi.clearAllMocks();
});
