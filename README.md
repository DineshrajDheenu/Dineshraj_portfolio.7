# dineshraj-portfolio

Static portfolio website deployable to GitHub Pages.

## Deployment setup

This repository includes a GitHub Actions workflow at `.github/workflows/gh-pages.yml`.
It will deploy the repository root to GitHub Pages whenever you push to the `main` branch.

## Local setup

1. Install Git if not already installed.
2. Open a terminal in this folder.
3. Run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/dineshraj-portfolio.git
   git push -u origin main
   ```

## GitHub setup

1. Create a new repository on GitHub named `dineshraj-portfolio`.
2. Push your local branch to GitHub.
3. The workflow will publish the site automatically to GitHub Pages.
4. Visit `https://<your-username>.github.io/dineshraj-portfolio/` after the first workflow run completes.

> If your branch is not `main`, update the branch name in `.github/workflows/gh-pages.yml`.
