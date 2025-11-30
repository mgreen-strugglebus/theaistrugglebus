import { NextRequest, NextResponse } from "next/server";
import { createContact } from "@/lib/db";
import { sendContactNotification } from "@/lib/email";
import { validateContactInput } from "@/lib/validation";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

// Rate limit: 5 requests per minute per IP
const RATE_LIMIT_CONFIG = {
  limit: 5,
  windowMs: 60 * 1000, // 1 minute
};

// Maximum request body size (10KB should be plenty for a contact form)
const MAX_BODY_SIZE = 10 * 1024;

export async function POST(request: NextRequest) {
  try {
    // Check rate limit
    const clientIp = getClientIp(request);
    const rateLimitResult = checkRateLimit(`contact:${clientIp}`, RATE_LIMIT_CONFIG);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
            "X-RateLimit-Limit": String(rateLimitResult.limit),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(rateLimitResult.resetTime),
          },
        }
      );
    }

    // Check content length before parsing
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: "Request body too large" },
        { status: 413 }
      );
    }

    // Parse and validate request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Ensure body is an object
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Request body must be a JSON object" },
        { status: 400 }
      );
    }

    // Validate input
    const validation = validateContactInput(body as Record<string, unknown>);

    if (!validation.valid) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const { data } = validation;

    // Store in database
    await createContact(data);

    // Send notification email (don't fail the request if email fails)
    try {
      await sendContactNotification({
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message,
        source: data.source,
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("Failed to send notification email:", emailError instanceof Error ? emailError.message : "Unknown error");
    }

    return NextResponse.json(
      { success: true, message: "Thank you for your submission. We'll be in touch soon." },
      {
        headers: {
          "X-RateLimit-Limit": String(rateLimitResult.limit),
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
          "X-RateLimit-Reset": String(rateLimitResult.resetTime),
        },
      }
    );
  } catch (error) {
    // Log error without exposing sensitive details
    console.error(
      "Contact form error:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
