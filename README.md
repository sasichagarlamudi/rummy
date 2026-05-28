# Rummy PWA - Install Guide

A self-contained Progressive Web App. All 9 files in this folder are what you upload. Total size: ~328 KB.

## Files

- `index.html` - app shell
- `app.js` - bundled React app (includes all logic)
- `manifest.json` - tells the browser this is an installable app
- `sw.js` - service worker for offline support
- `icon.svg`, `icon-192.png`, `icon-512.png`, `icon-180.png`, `icon-maskable-512.png` - app icons

## Hosting on GitHub Pages (free, ~5 min)

**1. Create a free GitHub account** at https://github.com if you don't have one.

**2. Create a new public repo.** Click + → New repository. Name it `rummy` (or anything). Make it Public. Don't initialize with a README. Click Create.

**3. Upload these files.** On the new empty repo page, click "uploading an existing file". Drag all 9 files from this folder into the upload area. Scroll down, click Commit changes.

**4. Turn on Pages.** Repo Settings → Pages (left sidebar) → under "Branch", select `main` and `/ (root)`, click Save. Wait ~1 minute. The page will show: `Your site is live at https://YOURNAME.github.io/rummy/`.

**5. Open that URL on your phone** in Safari (iPhone) or Chrome (Android).

**6. Install.**
- iPhone (Safari): tap the share button (square with up-arrow), scroll down, tap "Add to Home Screen", tap Add.
- Android (Chrome): tap the three-dot menu, tap "Install app" or "Add to Home Screen".

You now have a Rummy icon on your home screen. Tap it. The app opens full-screen with no browser UI, works offline, and saves game state across launches.

## Sharing

Send the URL to your rummy crew. They install the same way. Each phone keeps its own local scores.

## Updating the app

If you want to change anything later, edit the files in the repo (web UI works fine for small edits), commit. GitHub Pages will redeploy in a minute or two. On phones, the service worker checks for updates next time the app opens.

## Alternative hosts

Same files work on Netlify, Vercel, Cloudflare Pages, or any static host. GitHub Pages is just the most no-friction option.
