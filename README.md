# Aryan Sherigar Portfolio Website

This is my recruiter-focused, single-page portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion to showcase my software engineering and GenAI work.

## Local development setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create a `.env.local` file in the repository root (or copy from `.env.example`) and set:

| Variable | Description | Where to get it |
| --- | --- | --- |
| `RESEND_API_KEY` | API key used by the contact email route | Resend dashboard (`https://resend.com`) |
| `CONTACT_FROM_EMAIL` | Verified sender email/domain for outbound contact emails | Verified sender/domain in Resend |
| `CONTACT_TO_EMAIL` | Inbox that receives portfolio contact form messages | My destination email (defaults to `sherigararyan90@gmail.com` if omitted) |
| `SITE_URL` | Deployed production URL used for metadata/canonical references | My Vercel deployment URL |

## How to add or edit projects

Project cards and other profile content are managed in:

- `/home/runner/work/portfolio-website/portfolio-website/src/lib/site-data.ts`

Update the `projects` array to add, remove, or edit featured projects.

## How to swap the resume PDF

1. Replace `/home/runner/work/portfolio-website/portfolio-website/public/resume.pdf` with the new file.
2. Keep the same filename (`resume.pdf`) so existing hero/resume links continue to work.

## Deploy to Vercel

1. Push my branch to GitHub.
2. Import the repository in Vercel.
3. Add all environment variables from the table above in Vercel Project Settings.
4. Deploy using default Next.js settings.

One-click deploy template (replace with my own repo URL if needed):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AryanSherigar/portfolio-website)

## How to update contact details

Update contact links and email shown on the site in:

- `/home/runner/work/portfolio-website/portfolio-website/src/lib/site-data.ts` (`contactLinks`)

Contact form delivery behavior is configured in:

- `/home/runner/work/portfolio-website/portfolio-website/src/app/api/contact/route.ts`

After updates, run:

```bash
npm run lint
npm run build
```
