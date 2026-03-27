import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export default function StatCounter({ value, suffix = "", label, duration = 1600 }: Props) {
  const { ref, inView } = useInView(0.3);
  const count = useCounter(value, duration, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm text-orange-100 mt-1">{label}</div>
    </div>
  );
}
