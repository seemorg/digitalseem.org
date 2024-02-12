import { cn } from "@/lib/utils";

type PillProps = React.HTMLAttributes<HTMLSpanElement>;

export default function Pill({ className, ...props }: PillProps) {
  return (
    <span
      className={cn(
        "rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-black",
        className,
      )}
      {...props}
    />
  );
}
