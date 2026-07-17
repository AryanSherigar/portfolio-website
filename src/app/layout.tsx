import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aryan Sherigar — Software Engineer & AI Builder',
  description:
    'Portfolio of Aryan Sherigar — IIT ISM Dhanbad, Software Engineer specialising in GenAI, RAG pipelines, and full-stack development.',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    title: 'Aryan Sherigar — Software Engineer & AI Builder',
    description:
      'Portfolio of Aryan Sherigar — IIT ISM Dhanbad, Software Engineer specialising in GenAI, RAG pipelines, and full-stack development.',
    url: '[SITE_URL]',
    siteName: 'Aryan Sherigar',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
