"use client";

import { useState } from 'react';
import { Button } from './Button';
import { Section } from './Section';
import { contactLinks } from '@/lib/site-data';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setFeedback('Please fill in all fields before sending.');
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFeedback('Message sent successfully. I will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setFeedback('Something went wrong while sending the message. Please use email or try again later.');
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s make it easy to reach me" description="Use the form for a direct message or reach out through email and social links.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="surface-card rounded-[1.75rem] p-6 sm:p-8">
          <div className="grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[#38bdf8]/80 focus:ring-1 focus:ring-[#38bdf8]/30 transition-colors text-white placeholder:text-gray-500" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} />
            <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[#38bdf8]/80 focus:ring-1 focus:ring-[#38bdf8]/30 transition-colors text-white placeholder:text-gray-500" placeholder="Your email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <textarea className="min-h-40 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[#38bdf8]/80 focus:ring-1 focus:ring-[#38bdf8]/30 transition-colors text-white placeholder:text-gray-500" placeholder="Your message" value={message} onChange={(event) => setMessage(event.target.value)} />
            <Button onClick={handleSubmit}>{status === 'loading' ? 'Sending...' : 'Send Message'}</Button>
            {feedback ? <p className={`text-sm ${status === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>{feedback}</p> : null}
          </div>
        </div>

        <aside className="surface-card rounded-[1.75rem] p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Direct Links</h3>
          <div className="mt-4 space-y-4 text-sm leading-7 text-[color:rgb(var(--foreground)/0.82)]">
            <p>Email: <a className="text-[#38bdf8] hover:opacity-80 transition-opacity" href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a></p>
            <p>GitHub: <a className="text-[#38bdf8] hover:opacity-80 transition-opacity" href={contactLinks.github}>{contactLinks.github}</a></p>
            <p>LinkedIn: <a className="text-[#38bdf8] hover:opacity-80 transition-opacity" href={contactLinks.linkedin}>{contactLinks.linkedin}</a></p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
