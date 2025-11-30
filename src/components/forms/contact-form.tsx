"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  source: "contact" | "assessment" | "sprint";
  submitLabel?: string;
  showMessage?: boolean;
}

export function ContactForm({
  source,
  submitLabel = "Submit",
  showMessage = true,
}: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      source,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Show specific validation errors if available
        if (result.details && Array.isArray(result.details)) {
          const errorMessages = result.details
            .map((err: { field: string; message: string }) => err.message)
            .join(". ");
          setError(errorMessages || result.error || "Please check your submission.");
        } else if (response.status === 429) {
          setError("Too many requests. Please wait a moment and try again.");
        } else {
          setError(result.error || "Something went wrong. Please try again.");
        }
        return;
      }

      setIsSuccess(true);
    } catch {
      setError("Unable to submit form. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-lg border bg-primary/5 p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your company" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
        </div>
      </div>

      {showMessage && (
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your business and what you're looking to achieve..."
            rows={4}
          />
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Submitting..." : submitLabel}
      </Button>
    </form>
  );
}
