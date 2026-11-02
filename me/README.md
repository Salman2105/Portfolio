# Salman Ahmed — Developer Portfolio

React 19 / Vite / Tailwind CSS 4 / Framer Motion. The application lives in this `me/` directory and is configured for GitHub Pages at `/Portfolio/`.

## Local development

```sh
npm install
npm run dev
npm run lint
npm test
npm run build
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`.

## Updating content

- Edit `src/data/portfolio.js` for profile links, selected projects, skills, workflow, and learning records.
- Each project accepts `repositoryUrl`, `demoUrl`, and `videoUrl`. Keep unavailable links `null`; the site renders an honest noninteractive status. Set `videoUrl` to a real public walkthrough URL to show a watch link in the notes dialog. There are no automatic video embeds.
- Earlier projects are preserved in `earlierProjects`. The old Bookstore link did not verify as public during this update, so its link is unset.
- Add `credentialUrl` to a learning record only after checking the certificate. Do not infer certification from course study. ISC2 / Fortinet exam completion and the additional AI-course credentials remain unconfirmed.
- The MeissaSoft role is presented as **Full Stack Developer**, starting **13 December 2025**. Team projects use contribution language, not sole ownership.
- Experience and About copy are in their corresponding components. DevOps, AI, security, and workflow presentation is in `services.jsx`; its existing `services` anchor remains available.
- Replace `public/Salman_Ahmed_CV.pdf` with the updated CV when ready. This update preserves the original PDF.

## Integrations and privacy

The contact form retains the existing EmailJS service, template, and browser public key. EmailJS browser public keys are public identifiers, not server secrets. Never place private credentials in frontend code. Review EmailJS allowed origins and spam protection in the account when deploying. Form tests mock delivery and never send email.

Google Analytics retains the existing measurement ID but is off unless a visitor opts in through **Privacy & preferences**. Fonts are self-hosted with their OFL licenses. No LinkedIn iframe or third-party video loads automatically. Theme and analytics preferences are stored locally when storage is available.

## Validation

`npm run lint`, `npm test`, and `npm run build` cover lint, contact delivery states, saved theme behavior, and the production bundle. Browser review covers project filtering, notes, navigation, themes, and responsive layouts. Live inbox delivery requires a real submission and was not sent as part of automated checks.

There is no TypeScript configuration or type-check script in this JavaScript portfolio. The technologies listed describe project experience, not this site's implementation language.

## Deployment

The original `npm run deploy` / `gh-pages` workflow is preserved. No deployment or Git push is performed by local development. If the deployment base changes, update `vite.config.js`, `package.json` homepage, and canonical / Open Graph URLs in `index.html`.
