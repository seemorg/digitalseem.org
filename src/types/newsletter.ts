export type NewsletterFormState = {
  status: "idle" | "success" | "error";
  error?: string | null;
};
