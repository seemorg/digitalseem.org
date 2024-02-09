"use server";

import { env } from "@/env";
import { resend } from "@/lib/resend";
import { isValidEmail } from "@/lib/utils";

export const addEmailToNewsletter = async (email: string) => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email");
  }

  await resend.contacts.create({
    email,
    audienceId: env.RESEND_AUDIENCE_ID,
  });
};
