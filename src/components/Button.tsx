import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

export function Button({ children, href, variant = 'primary', onClick }: ButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02040A]';
  const variantClass =
    variant === 'primary'
      ? 'bg-[#38bdf8] text-[#02040A] hover:opacity-90'
      : 'border border-[#38bdf8]/30 bg-white/5 text-white hover:border-[#38bdf8]/60 hover:bg-[#38bdf8]/10';

  if (href) {
    return (
      <a className={`${baseClass} ${variantClass}`} href={href} onClick={onClick} rel={href.startsWith('#') || href.startsWith('/') ? undefined : 'noreferrer'} target={href.startsWith('#') || href.startsWith('/') ? undefined : '_blank'}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClass} ${variantClass}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
