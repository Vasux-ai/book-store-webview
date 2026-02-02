# Book Store Webview

A modern, responsive book store web application built with React and Vite. Browse books by category, explore top sellers, recommended titles, and stay updated with news and events.

## Features

- **Banner** – Hero section with featured content
- **Top Seller** – Carousel of best-selling books with category filter (Business, Fiction, Adventure, Horror)
- **Recommended** – Curated book recommendations
- **News & Events** – Latest news and updates in a swipeable carousel
- **Newsletter** – Email subscription in the footer
- **Responsive Design** – Optimized for mobile, tablet, and desktop

## Tech Stack

- **React 19** – UI library
- **Vite 7** – Build tool and dev server
- **React Router 7** – Client-side routing
- **Tailwind CSS 4** – Utility-first styling
- **Swiper** – Touch-enabled carousels
- **React Icons** – Icon library

## Project Structure

```
book-store-webview/
├── public/
│   ├── book.json          # Book data
│   └── fav-icon.png
├── src/
│   ├── assets/            # Images (books, news, logos)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Banner.jsx
│   │   ├── Home.jsx
│   │   ├── TopSeller.jsx
│   │   ├── Recommmened.jsx
│   │   ├── News.jsx
│   │   └── books/
│   │       └── BookCard.jsx
│   ├── routers/
│   │   └── router.jsx
│   ├── utils/
│   │   └── getImgUrl.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd book-store-webview
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Routes

| Path | Description |
|------|-------------|
| `/` | Home page (Banner, Top Seller, Recommended, News) |
| `/about` | About page |
| `/orders` | Orders page |

## License

Private project.
