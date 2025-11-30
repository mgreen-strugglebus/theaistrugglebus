import { sql } from '@vercel/postgres';
import type { Contact, QuizResponse } from '@/types';

export async function createContact(data: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact> {
  const result = await sql`
    INSERT INTO contacts (email, name, company, phone, message, source)
    VALUES (${data.email}, ${data.name}, ${data.company ?? null}, ${data.phone ?? null}, ${data.message ?? null}, ${data.source})
    RETURNING id, email, name, company, phone, message, source, created_at as "createdAt"
  `;
  return result.rows[0] as Contact;
}

/**
 * Stores quiz response in the database.
 * NOTE: Currently unused - the quiz page does not store responses to match
 * the user-facing message "Your answers are not stored."
 * This function is available for future use if opt-in storage is implemented.
 */
export async function createQuizResponse(
  contactId: string,
  answers: Record<string, string | number>,
  score: number,
  category: QuizResponse['category']
): Promise<QuizResponse> {
  const result = await sql`
    INSERT INTO quiz_responses (contact_id, answers, score, category)
    VALUES (${contactId}, ${JSON.stringify(answers)}, ${score}, ${category})
    RETURNING id, contact_id as "contactId", answers, score, category, created_at as "createdAt"
  `;
  return result.rows[0] as QuizResponse;
}

export async function getContactByEmail(email: string): Promise<Contact | null> {
  const result = await sql`
    SELECT id, email, name, company, phone, message, source, created_at as "createdAt"
    FROM contacts
    WHERE email = ${email}
    ORDER BY created_at DESC
    LIMIT 1
  `;
  return (result.rows[0] as Contact) ?? null;
}
