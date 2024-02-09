"use client";

import { isValidEmail } from "@/lib/utils";
import { addEmailToNewsletter } from "@/services/newsletter";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget.email as HTMLInputElement).value;

    if (!email || !isValidEmail(email)) return;

    setStatus("loading");

    let error;

    try {
      await addEmailToNewsletter(email);
    } catch (e) {
      error = e;
    }

    setStatus(error ? "error" : "success");
  };

  const isFinished = status === "success" || status === "error";

  return (
    <div>
      <h2>Get our monthly updates</h2>

      {isFinished ? (
        <div className="mt-5 min-h-[65px] w-[400px] max-w-full">
          {status === "success" ? (
            <p className="text-xl text-white">Thanks for subscribing!</p>
          ) : (
            <p className="text-xl text-red-200">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      ) : (
        <form
          className="group relative z-0 mt-5 w-[400px] max-w-full transition-all focus-within:z-10"
          onSubmit={handleSubmit}
        >
          <input
            id="email"
            placeholder=" "
            className="peer block w-full border border-primary-100 bg-transparent px-6 pb-4 pt-6 text-base/6 text-white ring-4 ring-transparent transition focus:border-white focus:outline-none focus:ring-white/5"
            type="email"
            name="email"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-primary-100 transition-all duration-200 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-white peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-white"
          >
            Email
          </label>

          <button
            className="absolute bottom-0 right-0 top-0 flex h-full w-14 items-center justify-center bg-white text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/50"
            type="submit"
            disabled={status === "loading"}
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </form>
      )}
    </div>
  );
}
