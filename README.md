# [amalk.au](http://amalk.au) - Personal Website

Personal website and software engineering portfolio built using modern, native web technologies.

---

## Overview

This repository contains the source code for [amalk.au](https://amalk.au/), my personal website and software engineering portfolio.

The website showcases my engineering interests and projects.

The project intentionally uses native web technologies rather than a frontend framework. It serves as an opportunity to build a responsive, accessible and maintainable website while working directly with the browser's core technologies.

## Features

- **Responsive Design:** Layouts designed to adapt to different screen sizes and devices.

- **Native Web Technologies:** Built with HTML, CSS and vanilla JavaScript.

- **Semantic HTML:** Structured markup designed to improve readability, accessibility and maintainability.

- **Responsive Layouts:** CSS Grid, Flexbox and modern CSS capabilities.

- **Fluid Typography:** Typography designed to scale across different screen sizes.

- **Portfolio:** Showcases engineering interests and projects.

- **SEO:** Includes metadata, Open Graph information, a sitemap and crawler configuration.

- **Custom 404 Page:** A dedicated page for handling missing pages.

- **Custom Domain:** Configured for `amalk.au`.

## Tech Stack

| Category             | Technology         |
| -------------------- | ------------------ |
| Markup               | HTML5              |
| Styling              | CSS3               |
| Programming Language | JavaScript         |
| Layout               | CSS Grid, Flexbox  |
| Package Manager      | pnpm               |
| Linting              | ESLint             |
| CSS Linting          | ESLint CSS Plugin  |
| JSON Linting         | ESLint JSON Plugin |
| Hosting              | GitHub Pages       |
| Version Control      | Git                |
| Repository Hosting   | GitHub             |

## Live Website: [https://amalk.au](https://amalk.au)

## Source Code : [https://github.com/amalk-au/amalk-au.github.io](https://github.com/amalk-au/amalk-au.github.io)

## Engineering Approach

### Why Native Web Technologies ?

Modern frontend frameworks provide powerful abstractions, but they aren't always necessary for every project.

For this website, I deliberately chose HTML, CSS and JavaScript (ES6+).

- **The Joy of Building :** Beyond the technical benefits, working with native web technologies is simply fun. There's something rewarding about building things directly with HTML, CSS and JavaScript, experimenting with browser capabilities, and seeing how far you can go without relying on frameworks or abstractions. It encourages curiosity, creativity and a deeper appreciation of the web platform itself. Sometimes, keeping things simple is not just a practical engineering decision; it's also an enjoyable way to build.
- **Understanding the fundamentals:** Working directly with the browser APIs, DOM and web platform reinforces an understanding of how web applications work under the hood.

- **Reducing unnecessary complexity:** A personal website doesn't necessarily require a frontend framework, build pipeline or virtual DOM.

- **Long-term maintainability:** Keeping dependencies and abstractions to a minimum reduces unnecessary maintenance overhead.

- **Modern CSS capabilities:** CSS Grid, Flexbox, CSS variables and fluid sizing provide powerful tools for building responsive layouts without relying on additional libraries.

- **Pragmatic engineering:** Technology choices should be driven by the project's requirements rather than by trends or familiarity alone.

## Project Structure

```
.
├── assets/               # Images, icons and other assets
├── css/                  # Stylesheets
├── js/                   # JavaScript files
├── 404.html              # Custom error page
├── CNAME                 # Custom domain configuration
├── eslint.config.mjs      # ESLint configuration
├── index.html             # Website entry point
├── package.json           # Project metadata and scripts
├── pnpm-lock.yaml         # Dependency lockfile
├── robots.txt             # Search engine crawler instructions
├── sitemap.xml            # Sitemap
└── README.md
```

## Getting Started

### Prerequisites

- pnpm
- node.js

### Installation

1.  Clone the repository:

    ```
    git clone https://github.com/amalk-au/amalk-au.github.io.git
    ```

2.  Navigate to the project directory:

    ```
    cd amalk-au.github.io
    ```

3.  Install dependencies:

    ```
    pnpm install
    ```

### Running the Website Locally

This project uses the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension for Visual Studio Code to serve and preview the website locally.

#### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)

- [Live Preview Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)

#### Setup

1.  Install the [Live Preview extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server).

2.  Open `index.html` in Visual Studio Code.

3.  To open the integrated preview:
    - Click the **Show Preview** button in the top-right corner of the editor, or right-click inside the editor and select **Show Preview**.

4.  To open the website in an external browser:
    - Open the Command Palette (`Ctrl + Shift + P`).

    - Search for and select **Live Preview: Show Preview (External Browser)**.

The website will be served locally, typically at `http://localhost:3000/`.

Live Preview automatically refreshes the page when changes are saved, providing a convenient development workflow.

## Available Scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `pnpm lint`     | Run ESLint across the repository          |
| `pnpm lint:fix` | Automatically fix supported ESLint issues |

## Development

### Code Quality

ESLint is configured to check JavaScript, JSON and CSS files.

The project uses ESLint's flat configuration system.

Run linting before committing changes:

```
pnpm lint
```

To automatically fix supported issues:

```
pnpm lint:fix
```

### Development Workflow

Follow a feature branch workflow when updating website:

1.  **Update the local** `**main**` **branch:**

    ```
    git switch main
    git pull origin main
    ```

2.  **Create a feature branch:**

    Use a descriptive branch name (e.g. `feature/navbar`).

    ```
    git switch -c feature/navbar
    ```

3.  **Implement and test your changes:**

    Test the website in the browser and run ESLint.

    ```
    pnpm lint
    ```

4.  **Commit your changes:**

    ```
    git add -A
    git commit -m "Add responsive navbar"
    ```

5.  **Push your feature branch:**

    ```
    git push -u origin feature/navbar
    ```

6.  **Open a Pull Request:**

    Create a Pull Request on GitHub targeting `main` for review.

**Merge Strategy:** Prefer **Squash and merge** for feature branches to maintain a clean and concise commit history on `main`.

Keep changes focused, maintainable and consistent with the existing project structure.

## Deployment

The website is hosted using GitHub Pages and configured with a custom domain.

### Deployment Configuration

| Configuration        | Details              |
| -------------------- | -------------------- |
| Hosting              | GitHub Pages         |
| Repository           | `amalk-au.github.io` |
| Custom Domain        | `amalk.au`           |
| Domain Configuration | `CNAME`              |
| Entry Point          | `index.html`         |

Changes committed and pushed to the `main` branch are published through GitHub Pages.

## SEO

The repository includes the following SEO-related configuration:

- `robots.txt` – provides crawler instructions.

- `sitemap.xml` – provides the website sitemap.

- Open Graph metadata – provides metadata for social sharing.

- HTML metadata – includes page titles and descriptions.

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).

See the [LICENSE](LICENSE) file for details.

## Contact

- **Website:** [https://amalk.au/](https://amalk.au/)

- **GitHub:** [https://github.com/amalk-au](https://github.com/amalk-au)
