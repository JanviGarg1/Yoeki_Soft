# NovaSphere Studio Landing Page

Sections implemented:
- Hero
- Our Services
- Our Values
- Contact Form (controlled state + POST to JSONPlaceholder)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

- **Vercel:** import the repo, framework = Vite
- **Netlify:** build command = `npm run build`, publish directory = `dist`

## Contact form
- Submits via `POST` to `https://jsonplaceholder.typicode.com/posts`.
