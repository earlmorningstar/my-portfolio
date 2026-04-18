# Joel Onyeabor — Frontend Developer Portfolio

A personal portfolio built with React, showcasing projects, technical stack, and a way to get in touch. Designed with a glassmorphic aesthetic — restrained, matured, and built to feel at home alongside modern developer tools like Linear, Vercel, and Stripe.

**Live site:** [earlmorningstar.github.io/my-portfolio](https://earlmorningstar.github.io/my-portfolio/)

---

## Pages

- **Home** — Introduction, notable projects, and a snapshot of the tech stack
- **About** — Background, philosophy, education, and experience
- **Stack** — Technologies and tools used professionally
- **Projects** — Full project showcase with descriptions, stack tags, and links
- **Contact** — Reach out via the contact form or social links
- **Licensing** — Licensing information for portfolio content

---

## Tech Stack

| Layer         | Technology                              |
| ------------- | --------------------------------------- |
| Framework     | React 18                                |
| Routing       | React Router v6 (`createBrowserRouter`) |
| UI Components | MUI (Material UI)                       |
| Icons         | React Icons                             |
| Animations    | AOS (Animate On Scroll)                 |
| Carousel      | React Slick                             |
| Email         | EmailJS                                 |
| Deployment    | GitHub Pages via `gh-pages`             |

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/earlmorningstar/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start the development server
npm start
```

The app runs at `http://localhost:3000`. The router basename is set to `/` in development and `/my-portfolio` in production automatically via `process.env.NODE_ENV`.

---

## Deployment

This portfolio is deployed to GitHub Pages using the `gh-pages` package.

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

This runs the `predeploy` script (which builds the app) and then pushes the `build` folder to the `gh-pages` branch of the repository.

> **Note:** Always run `git push origin main` to update the source code before running `npm run deploy` to update the live site.

---

## Design System

The UI is built around a set of CSS custom properties defined in `Index.css`:

- **Background:** Deep navy-black (`#080c14`) with a subtle dot-grid texture
- **Surfaces:** Layered glass panels using `rgba` and `backdrop-filter`
- **Accent:** `#3ecf8e` — a refined emerald green used for active states, highlights, and interactive elements
- **Typography:** Raleway, Manrope, Montserrat, and Poppins
- **Motion:** AOS for scroll-triggered entrance animations; CSS keyframes for navigation transitions

---

## Project Structure

```
src/
├── components/
│   ├── MainNavigation.jsx
│   ├── MainNavigation.css
│   ├── Fallback.jsx
│   └── ScrollToTop.jsx
├── pages/
│   ├── RootLayout.jsx
│   ├── HomePage.jsx
│   ├── About.jsx
│   ├── StackPage.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
|   ├── ConnectionNote.jsx
|   ├── DispatchItem.jsx
│   ├── Licensing.jsx
│   └── ErrorPage.jsx
│   └── Index.css
├── context/
│   └── AOSContext.js
```

---

## Contact

**Joel Onyeabor**

- GitHub: [@earlmorningstar](https://github.com/earlmorningstar)
- Portfolio: [earlmorningstar.github.io/my-portfolio](https://earlmorningstar.github.io/my-portfolio/)

---

## License

All content, design, and code in this portfolio are the intellectual property of Joel Onyeabor unless otherwise stated. See the [Licensing](https://earlmorningstar.github.io/my-portfolio/licensing) page for details.
