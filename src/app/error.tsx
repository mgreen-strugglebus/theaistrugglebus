"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console (could send to error tracking service)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-3xl font-bold text-foreground">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        We encountered an unexpected error. Our team has been notified.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset}>
          Try Again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
