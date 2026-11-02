# Salman Ahmed — Developer Portfolio

The current application is in [`me/`](me/). The repository-root npm scripts forward to this directory so the updated portfolio is used for development, builds, and deployment.

Live portfolio: https://salman2105.github.io/Portfolio/

```sh
npm --prefix me ci
npm run dev
npm run lint
npm test
npm run build
npm run deploy
```

`npm run deploy` builds `me/dist` and publishes it to the existing `gh-pages` branch. GitHub Pages must use `gh-pages` and `/ (root)` as its publishing source.

See [`me/README.md`](me/README.md) for content editing, integration details, and validation. Older root-level source files are retained from the repository's original history; the active application and deployable build are in `me/`.
