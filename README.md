# Aryan Sherigar Portfolio

A single-page Next.js portfolio for Aryan Sherigar, built to help recruiters quickly understand the profile, review featured projects, and contact him.

## Local Setup

```bash
npm install
npm run dev
```

## Environment Variables

| Name | Description | Where to get it |
| --- | --- | --- |
| `RESEND_API_KEY` | API key used by the contact form email route | Create it in the Resend dashboard |
| `CONTACT_TO_EMAIL` | Destination inbox for contact messages | Use `sherigararyan90@gmail.com` or another inbox you control |
| `CONTACT_FROM_EMAIL` | Verified sender address for Resend | Add a verified domain or Resend test sender |
| `SITE_URL` | Canonical deployed site URL for metadata | Your Vercel deployment URL |

## Updating Content

- Edit featured projects in `src/lib/site-data.ts`.
- Update skills, achievements, and contact links in `src/lib/site-data.ts`.
- Replace the profile photo placeholder in `src/components/Hero.tsx`.

## Resume

- Replace the PDF at `public/resume.pdf` with your final resume.
- The hero and resume sections already link to `/resume.pdf`.

## Deployment

- Push the repo to GitHub.
- Import the repository into Vercel.
- Add the environment variables above in the Vercel project settings.
- Deploy using the default Next.js settings.

## Contact Form

- The contact form posts to `POST /api/contact`.
- It uses a Next.js route handler and is safe for Vercel deployment.
- Wire the route to Resend using the env vars above before going live.
