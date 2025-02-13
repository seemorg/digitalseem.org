import { cn } from "@/lib/utils";

type PillProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary";
};

export default function Pill({
  className,
  variant = "default",
  ...props
}: PillProps) {
  return (
    <span
      className={cn(
        "w-fit rounded-full px-3 py-1.5 font-bold",
        variant === "default" &&
          "bg-primary-background text-primary-foreground",
        variant === "secondary" &&
          "border border-primary-foreground/15 bg-white text-primary-foreground",
        className,
      )}
      {...props}
    />
  );
}
