import { describe, it, expect } from 'vitest';
import {
  isValidEmail,
  isValidSource,
  validateContactInput,
  VALID_SOURCES,
  MAX_FIELD_LENGTHS,
} from '@/lib/validation';

describe('isValidEmail', () => {
  it('accepts valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    expect(isValidEmail('user+tag@example.org')).toBe(true);
    expect(isValidEmail('a@b.co')).toBe(true);
    expect(isValidEmail('user_name@domain.com')).toBe(true);
    expect(isValidEmail('user-name@domain.com')).toBe(true);
    expect(isValidEmail('123@example.com')).toBe(true);
  });

  it('rejects invalid email addresses', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('@invalid.com')).toBe(false);
    expect(isValidEmail('user@')).toBe(false);
    expect(isValidEmail('user@domain')).toBe(false); // missing TLD
    expect(isValidEmail('user name@domain.com')).toBe(false); // space in local part
    expect(isValidEmail('user@.com')).toBe(false); // domain starts with dot
    expect(isValidEmail('user@domain.')).toBe(false); // TLD missing
    expect(isValidEmail('user@domain.c')).toBe(false); // TLD too short
  });

  it('rejects emails exceeding max length', () => {
    // MAX_FIELD_LENGTHS.email is 320, so create email > 320 chars
    const longEmail = 'a'.repeat(310) + '@example.com'; // 322 chars total
    expect(isValidEmail(longEmail)).toBe(false);
  });

  it('handles edge cases correctly', () => {
    // Technically valid according to RFC but often problematic
    expect(isValidEmail('a@b.cd')).toBe(true); // minimal valid email
    expect(isValidEmail('user@sub.domain.example.com')).toBe(true); // subdomains
  });
});

describe('isValidSource', () => {
  it('accepts valid sources', () => {
    for (const source of VALID_SOURCES) {
      expect(isValidSource(source)).toBe(true);
    }
  });

  it('rejects invalid sources', () => {
    expect(isValidSource('')).toBe(false);
    expect(isValidSource('invalid')).toBe(false);
    expect(isValidSource('CONTACT')).toBe(false); // case sensitive
    expect(isValidSource('unknown')).toBe(false);
  });
});

describe('validateContactInput', () => {
  const validInput = {
    name: 'John Doe',
    email: 'john@example.com',
    source: 'contact',
  };

  it('accepts valid input with required fields only', () => {
    const result = validateContactInput(validInput);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.name).toBe('John Doe');
      expect(result.data.email).toBe('john@example.com');
      expect(result.data.source).toBe('contact');
    }
  });

  it('accepts valid input with all fields', () => {
    const fullInput = {
      ...validInput,
      company: 'ACME Corp',
      phone: '555-1234',
      message: 'Hello, I would like to learn more.',
    };
    const result = validateContactInput(fullInput);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.company).toBe('ACME Corp');
      expect(result.data.phone).toBe('555-1234');
      expect(result.data.message).toBe('Hello, I would like to learn more.');
    }
  });

  it('trims whitespace from input', () => {
    const result = validateContactInput({
      name: '  John Doe  ',
      email: '  john@example.com  ',
      source: 'contact',
    });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.name).toBe('John Doe');
      expect(result.data.email).toBe('john@example.com');
    }
  });

  it('rejects missing required fields', () => {
    const result = validateContactInput({});
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors).toHaveLength(3);
      expect(result.errors.map((e) => e.field)).toContain('name');
      expect(result.errors.map((e) => e.field)).toContain('email');
      expect(result.errors.map((e) => e.field)).toContain('source');
    }
  });

  it('rejects invalid email format', () => {
    const result = validateContactInput({
      ...validInput,
      email: 'invalid-email',
    });
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some((e) => e.field === 'email')).toBe(true);
    }
  });

  it('rejects invalid source', () => {
    const result = validateContactInput({
      ...validInput,
      source: 'invalid-source',
    });
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.some((e) => e.field === 'source')).toBe(true);
    }
  });

  it('truncates fields that exceed max length', () => {
    const longName = 'A'.repeat(MAX_FIELD_LENGTHS.name + 100);
    const result = validateContactInput({
      ...validInput,
      name: longName,
    });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.name.length).toBe(MAX_FIELD_LENGTHS.name);
    }
  });

  it('handles empty strings as missing', () => {
    const result = validateContactInput({
      name: '',
      email: '',
      source: '',
    });
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors).toHaveLength(3);
    }
  });

  it('handles whitespace-only strings as missing', () => {
    const result = validateContactInput({
      name: '   ',
      email: '   ',
      source: '   ',
    });
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors).toHaveLength(3);
    }
  });

  it('handles non-string values gracefully', () => {
    const result = validateContactInput({
      name: 123,
      email: true,
      source: null,
    });
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors).toHaveLength(3);
    }
  });

  it('sets optional fields to undefined when empty', () => {
    const result = validateContactInput(validInput);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.company).toBeUndefined();
      expect(result.data.phone).toBeUndefined();
      expect(result.data.message).toBeUndefined();
    }
  });
});
