"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <ProgressBar
        height="6px"
        color="#a1c804"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
