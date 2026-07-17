"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/site-data';

export function Navbar() {
  const [activeId, setActiveId] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const linkClass = (href: string) =>
    `px-3 py-2 text-sm font-medium transition-colors ${activeId === href.slice(1) ? 'text-[#38bdf8]' : 'text-gray-400 hover:text-white'}`;

  const handleNavigate = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02040A]/80 backdrop-blur-md">
      <div className="section-shell flex h-14 items-center justify-between gap-4">
        <Link href="#top" className="flex items-center gap-2 font-bold text-white tracking-tight">
          <span className="text-xl">🦜🔗</span> Aryan Sherigar
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-sm font-medium text-[#38bdf8] hover:border-[#38bdf8]/60 hover:bg-[#38bdf8]/20 transition font-mono">
             Resume
           </a>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label="Open menu"
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#02040A] px-4 py-4 space-y-4 md:hidden">
           {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block text-sm font-medium text-gray-300 hover:text-white" onClick={handleNavigate}>
              {item.label}
            </Link>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-gray-300 hover:text-white" onClick={handleNavigate}>
             Resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
