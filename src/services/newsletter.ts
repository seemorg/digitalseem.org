"use server";

import { env } from "@/env";
import { resend } from "@/lib/resend";
import type { NewsletterFormState } from "@/types/newsletter";
import z from "zod/v4";

export const verifyEmail = async (email: string) => {
  try {
    //TODO: Replace verifyright with an alternative if it keeps failing
    const response = await fetch(
      `https://verifyright.co/verify/${encodeURIComponent(email)}?token=${env.VERIFY_RIGHT_API_KEY}`,
    );

    const data = (await response.json()) as {
      status: boolean;
    };

    return data.status;
  } catch {
    return false;
  }
};

export const addEmailToNewsletter = async (
  _prevState: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> => {
  const email = formData.get("email");
  const result = z.email().safeParse(email);

  if (!result.success) {
    return {
      status: "error",
      error: "Invalid email, please try again.",
    } satisfies NewsletterFormState;
  }

  // TODO: Uncomment this when verifyright is fixed
  // const isValidEmail = await verifyEmail(result.data);
  // if (!isValidEmail) {
  //   return {
  //     status: "error",
  //     error: "Invalid email, please try again.",
  //   } satisfies NewsletterFormState;
  // }

  await resend.contacts.create({
    email: result.data,
    audienceId: env.RESEND_AUDIENCE_ID,
  });

  // TODO: Send welcome email

  return {
    status: "success",
  } satisfies NewsletterFormState;
};
