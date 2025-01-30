import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLProps<HTMLDivElement>;

export default function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6", className)}
      {...props}
    />
  );
}
