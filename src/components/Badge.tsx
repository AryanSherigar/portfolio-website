import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#38bdf8]/25 bg-[#38bdf8]/10 px-3 py-1 text-xs font-medium text-[#38bdf8] shadow-sm font-mono">
      {children}
    </span>
  );
}
