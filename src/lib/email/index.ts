import { Resend } from 'resend';

/**
 * Escapes HTML special characters to prevent HTML injection attacks.
 * This should be used for all user-provided content in email templates.
 */
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailData) {
  const resend = getResendClient();

  const { data, error } = await resend.emails.send({
    from: 'The AI Struggle Bus <hello@theaistrugglebus.com>',
    to,
    subject,
    html,
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }

  return data;
}

export async function sendContactNotification(contact: {
  name: string;
  email: string;
  company?: string;
  message?: string;
  source: string;
}) {
  // Escape all user-provided content to prevent HTML injection
  const safeName = escapeHtml(contact.name);
  const safeEmail = escapeHtml(contact.email);
  const safeCompany = contact.company ? escapeHtml(contact.company) : '';
  const safeMessage = contact.message ? escapeHtml(contact.message) : '';
  const safeSource = escapeHtml(contact.source);

  const html = `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
    ${safeMessage ? `<p><strong>Message:</strong> ${safeMessage}</p>` : ''}
    <p><strong>Source:</strong> ${safeSource}</p>
  `;

  return sendEmail({
    to: 'hello@theaistrugglebus.com',
    subject: `New ${safeSource} inquiry from ${safeName}`,
    html,
  });
}

/**
 * Sends quiz results email to the user.
 * NOTE: Currently unused - the quiz page does not collect email or send results
 * to match the user-facing message "Your answers are not stored."
 * This function is available for future use if opt-in email results are implemented.
 */
export async function sendQuizResults(contact: {
  name: string;
  email: string;
  score: number;
  category: string;
}) {
  const categoryMessages = {
    early_stage: "You're in the early stages of AI readiness. We can help you identify quick wins.",
    workflow_friction: "You're experiencing workflow friction that AI can solve. Let's talk about automation.",
    roi_ready: "You're ready to see ROI from AI. Book an assessment to get started.",
  };

  const message = categoryMessages[contact.category as keyof typeof categoryMessages] || categoryMessages.early_stage;

  // Escape user-provided content to prevent HTML injection
  const safeName = escapeHtml(contact.name);
  // Category is from a known enum, but escape for safety
  const safeCategory = escapeHtml(contact.category.replace('_', ' ').toUpperCase());

  const html = `
    <h2>Your AI Readiness Quiz Results</h2>
    <p>Hi ${safeName},</p>
    <p>Thank you for taking the AI Readiness Quiz!</p>
    <p><strong>Your Score:</strong> ${contact.score}/100</p>
    <p><strong>Your Category:</strong> ${safeCategory}</p>
    <p>${message}</p>
    <p><a href="https://theaistrugglebus.com/assessment">Book an Assessment</a> to discover your top AI opportunities.</p>
    <p>Best,<br>The AI Struggle Bus Team</p>
  `;

  return sendEmail({
    to: contact.email,
    subject: 'Your AI Readiness Quiz Results',
    html,
  });
}
