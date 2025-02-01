import { cn } from "@/lib/utils";

type PillProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Pill({ className, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "bg-primary-background text-primary-foreground w-fit rounded-full px-3 py-1.5 font-bold",
        className,
      )}
      {...props}
    />
  );
}
