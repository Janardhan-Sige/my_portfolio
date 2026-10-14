# Janardhan Portfolio

Professional portfolio for Google Cloud data engineering, built with Next.js, React, Tailwind CSS, and Framer Motion.

## Local development

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To create the static production export, run:

```bash
npm run build
```

## Optional public environment variables

Configure these in the hosting provider's build environment. Values prefixed with `NEXT_PUBLIC_` are included in the browser bundle, so only use public URLs and a public contact address.

| Variable | Purpose | If omitted |
| --- | --- | --- |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public email used by the contact form to prepare an email draft and by the footer email link | The form explains that email is not configured and links to GitHub; it does not pretend a message was sent |
| `NEXT_PUBLIC_RESUME_URL` | Public URL to the current resume PDF | The hero links to the contact section so visitors can request the resume |
| `NEXT_PUBLIC_GOOGLE_CERTIFICATE_URL` | Public credential verification URL | Certification remains visible without a broken placeholder link |
| `NEXT_PUBLIC_BASE_PATH` | Optional deployment base path used by Next.js configuration | Defaults to the domain root |

The contact form currently uses the visitor's email application to prepare a draft. It does not submit to a server or store messages. To receive submissions without requiring the visitor to use an email app, configure a real form backend before advertising it as a server-submitted form.

## Portfolio content

- GCP data engineering introduction and technical stack
- Project descriptions covering ingestion, orchestration, data quality, warehouse modeling, and analytics
- Freelance website portfolio
- Google Cloud certification section
- Contact form and GitHub profile link

Project links are only shown where a destination is available; placeholder example.com links are intentionally not presented as live projects.
