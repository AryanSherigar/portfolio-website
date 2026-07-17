"use client";

import { useEffect, useRef } from 'react';

type Theme = 'light' | 'dark';

export function ThemeToggle() {
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const currentTheme = (document.documentElement.dataset.theme as Theme | undefined) ?? 'light';
    if (labelRef.current) {
      labelRef.current.textContent = currentTheme === 'dark' ? '☾' : '☼';
    }
  }, []);

  const toggleTheme = () => {
    const currentTheme = (document.documentElement.dataset.theme as Theme | undefined) ?? 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
    if (labelRef.current) {
      labelRef.current.textContent = nextTheme === 'dark' ? '☾' : '☼';
    }
  };

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[color:rgb(var(--surface)/1)] text-sm font-semibold transition hover:bg-[color:rgb(var(--surface-elevated)/1)]"
      onClick={toggleTheme}
      type="button"
    >
      <span ref={labelRef} aria-hidden="true">☼</span>
    </button>
  );
}
