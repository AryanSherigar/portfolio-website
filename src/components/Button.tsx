import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'download' | 'target' | 'rel'>;

export function Button({ children, href, variant = 'primary', onClick, download, target, rel }: ButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02040A]';
  const variantClass =
    variant === 'primary'
      ? 'bg-[#38bdf8] text-[#02040A] hover:opacity-90'
      : 'border border-[#38bdf8]/30 bg-white/5 text-white hover:border-[#38bdf8]/60 hover:bg-[#38bdf8]/10';

  if (href) {
    const isInternalLink = href.startsWith('#') || href.startsWith('/');
    const safeRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : isInternalLink ? undefined : 'noreferrer');
    const safeTarget = target ?? (isInternalLink ? undefined : '_blank');

    return (
      <a className={`${baseClass} ${variantClass}`} download={download} href={href} onClick={onClick} rel={safeRel} target={safeTarget}>
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
