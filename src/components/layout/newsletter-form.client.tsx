"use client";

import { useActionState } from "react";
import { Button } from "../ui/button";
import { addEmailToNewsletter } from "@/services/newsletter";
import type { NewsletterFormState } from "@/types/newsletter";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const initialState: NewsletterFormState = {
  status: "idle",
  error: null,
};

export default function NewsletterForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    addEmailToNewsletter,
    initialState,
  );

  const isError = state.status === "error" || !!state.error;
  const isSuccess = state.status === "success";

  if (isSuccess) {
    return (
      <div className={className}>
        <div className="flex w-full min-w-0 items-center gap-2 rounded-md bg-gray-200/50 px-3 py-2 sm:min-w-56">
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
          <p className="text-sm">Successfully subscribed</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form className={className} action={formAction}>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>

        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="email"
          disabled={pending}
          className={cn(
            "w-full min-w-0 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-foreground disabled:opacity-70 sm:w-56 sm:text-sm/6",
            isError &&
              "outline-red-500 placeholder:text-red-500 focus:outline-red-600",
          )}
        />

        <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
          <Button
            type="submit"
            className="shadow-none hover:bg-primary-background/70 focus:bg-primary-background/70"
            disabled={pending}
          >
            {pending ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </form>

      {isError && (
        <p className="mt-1 text-sm text-red-500">
          {state.error ?? "An error occurred"}
        </p>
      )}
    </div>
  );
}
