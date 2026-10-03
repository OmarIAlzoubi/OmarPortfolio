# OmarPortfolio Lite — GitHub Pages

This isolated snapshot preserves the portfolio design and public content. It contains no chat components, chat client, API routes, Python code, or environment files. `frontend/` and the Python AI application are independent and unchanged.

## Build

Requires Node.js 22.19 or newer.

```powershell
cd lite
npm ci
$env:NEXT_PUBLIC_BASE_PATH='/OmarPortfolio'
$env:NEXT_PUBLIC_SITE_URL='https://YOUR-USERNAME.github.io/OmarPortfolio'
npm run build
npm run preview
```

Open `http://127.0.0.1:4173/OmarPortfolio/`. The `out/` directory is the complete static site. `next export` and `next start` are unnecessary. The preview server is local tooling only and is not deployed.

For a `YOUR-USERNAME.github.io` repository or a custom domain served at its root, use an empty base path and the root URL:

```powershell
$env:NEXT_PUBLIC_BASE_PATH=''
$env:NEXT_PUBLIC_SITE_URL='https://YOUR-USERNAME.github.io'
npm run build
npm run preview
```

`NEXT_PUBLIC_BASE_PATH` is baked into the build. Next.js prefixes page links and `_next` assets through `basePath`; a separate `assetPrefix` is unnecessary for subpath hosting. `publicPath()` prefixes public images and download links. Image optimization is disabled because Pages has no Next.js server. Trailing slashes produce `resume/index.html` for direct navigation and refreshes. Canonicals, Open Graph metadata, robots, and sitemap use the full Pages URL.

Chat is absent from the source and export even if the inherited environment sets `NEXT_PUBLIC_ENABLE_CHAT=true`. The build wrapper forces it to false as well. No API keys or backend service are required.

## Publish

Keep `lite/` and `.github/workflows/pages-lite.yml` at the repository root. In GitHub, select **Settings → Pages → Build and deployment → Source → GitHub Actions**. Push to the repository's default branch (`main` or `master`), or run **Deploy portfolio Lite to GitHub Pages** manually from Actions. If the default branch has a different name, add it to the workflow's push branch list. Manual runs also require the default branch.

The workflow reads `base_path` and `base_url` from `actions/configure-pages`, so it handles project repositories, user repositories, and configured custom domains without hardcoded usernames. It installs only this frontend's dependencies, checks lint, builds and verifies the export, then uploads only `lite/out`. It does not run or upload the AI application.

Future design/content changes in `frontend/` do not automatically change this snapshot. Apply them deliberately to `lite/` to keep the releases independent.

## Verification

`npm run build` also verifies that all exported local asset/page URLs resolve, metadata retains the repository path, and no chat endpoint, chat UI, or private file types appear. `npm run verify` can repeat the checks using the same environment values used for the build. `npm run typecheck` checks the source independently.

References: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports), [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath), [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
