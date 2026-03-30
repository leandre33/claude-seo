import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`animate-${animation} ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
