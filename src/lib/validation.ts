import type { Contact } from '@/types';

export const VALID_SOURCES = ['contact', 'assessment', 'sprint', 'quiz'] as const;
export type ValidSource = typeof VALID_SOURCES[number];

export const MAX_FIELD_LENGTHS = {
  name: 200,
  email: 320, // RFC 5321 max email length
  company: 200,
  phone: 50,
  message: 5000,
  source: 20,
} as const;

export interface ValidationError {
  field: string;
  message: string;
}

export type ContactInput = Record<string, unknown>;

/**
 * Validates an email address format.
 * Uses a comprehensive regex that validates structure while avoiding false positives.
 * Checks for:
 * - Valid local part (letters, numbers, and common special chars)
 * - Single @ symbol
 * - Valid domain with at least one dot
 * - TLD of at least 2 characters
 */
export function isValidEmail(email: string): boolean {
  if (email.length > MAX_FIELD_LENGTHS.email) return false;

  // More comprehensive email regex:
  // - Local part: alphanumeric, dots, hyphens, underscores, plus signs
  // - Domain: alphanumeric and hyphens, separated by dots
  // - TLD: at least 2 letters
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}

/**
 * Validates that a source is one of the allowed values.
 */
export function isValidSource(source: string): source is ValidSource {
  return VALID_SOURCES.includes(source as ValidSource);
}

/**
 * Trims and validates a string field.
 * Returns null if the value is empty or not a string.
 */
function sanitizeString(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (trimmed.length === 0) return null;
  return trimmed.slice(0, maxLength);
}

/**
 * Validates contact form input and returns sanitized data or validation errors.
 */
export function validateContactInput(input: ContactInput): {
  valid: true;
  data: Omit<Contact, 'id' | 'createdAt'>;
} | {
  valid: false;
  errors: ValidationError[];
} {
  const errors: ValidationError[] = [];

  // Required fields
  const name = sanitizeString(input['name'], MAX_FIELD_LENGTHS.name);
  if (!name) {
    errors.push({ field: 'name', message: 'Name is required' });
  }

  const email = sanitizeString(input['email'], MAX_FIELD_LENGTHS.email);
  if (!email) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!isValidEmail(email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  const sourceRaw = sanitizeString(input['source'], MAX_FIELD_LENGTHS.source);
  if (!sourceRaw) {
    errors.push({ field: 'source', message: 'Source is required' });
  } else if (!isValidSource(sourceRaw)) {
    errors.push({ field: 'source', message: `Invalid source. Must be one of: ${VALID_SOURCES.join(', ')}` });
  }

  // Optional fields
  const company = sanitizeString(input['company'], MAX_FIELD_LENGTHS.company);
  const phone = sanitizeString(input['phone'], MAX_FIELD_LENGTHS.phone);
  const message = sanitizeString(input['message'], MAX_FIELD_LENGTHS.message);

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      name: name!,
      email: email!,
      company: company ?? undefined,
      phone: phone ?? undefined,
      message: message ?? undefined,
      source: sourceRaw as ValidSource,
    },
  };
}
