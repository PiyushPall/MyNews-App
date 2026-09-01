# 📰 Morning News

> A modern, responsive news aggregation application built with React, Vite, Tailwind CSS, and NewsAPI.

Morning News is a modern news discovery platform designed to make staying informed faster, cleaner, and more enjoyable.

The application fetches dynamic news content through NewsAPI and provides category-based discovery, search, responsive navigation, light/dark themes, loading states, API fallback handling, and smooth UI interactions.

---

## ✨ Features

### 📰 Dynamic News

Fetch and display news articles dynamically using the NewsAPI.

### 🔎 News Search

Search for news topics directly from the navigation bar.

The search interaction includes a delayed request mechanism to reduce unnecessary API calls while typing.

### 🗂️ Categories

Browse news by category:

* Business
* Entertainment
* General
* Health
* Science
* Sports
* Technology

### 🌙 Dark / Light Mode

Switch between light and dark themes with a smooth visual transition.

### 📱 Responsive Design

Designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

### ✨ Modern UI/UX

The interface includes:

* Glass-style navigation
* Responsive layouts
* Animated news cards
* Hover interactions
* Image zoom effects
* Smooth scrolling
* Modern typography
* Gradient accents
* Micro-interactions

### ⏳ Loading States

Custom loading feedback is displayed while news data is being retrieved.

### 🛡️ API Fallback

If the external news API fails or returns no articles, the application provides fallback content so the interface remains usable.

### 📭 Empty States

A dedicated empty state is displayed when there are no valid articles to show.

---

# 🛠️ Tech Stack

| Technology        | Purpose                     |
| ----------------- | --------------------------- |
| React             | UI development              |
| Vite              | Development & build tooling |
| JavaScript        | Application logic           |
| Tailwind CSS      | Utility-first styling       |
| DaisyUI           | UI utilities                |
| Axios             | HTTP/API requests           |
| NewsAPI           | News data                   |
| React Context API | Shared state                |
| Lucide React      | Icons                       |
| ESLint            | Code quality                |

---

# 🧠 Architecture

The application follows a component-based React architecture.

```text
src/
│
├── Components/
│   ├── Category.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   └── Wrapper.jsx
│
├── Config/
│   └── Axios.js
│
├── Context/
│   └── NewsContext.jsx
│
├── Page/
│   └── News.jsx
│
├── assets/
│
├── App.jsx
├── App.css
└── index.css
```

---

# 🔄 Application Flow

```text
User
 │
 ▼
React UI
 │
 ├── Search
 │
 ├── Category Selection
 │
 └── Theme Toggle
 │
 ▼
News Context
 │
 ▼
Axios
 │
 ▼
NewsAPI
 │
 ▼
News Data
 │
 ▼
React State
 │
 ▼
News Cards
```

---

# 🔍 Search Flow

The search functionality uses a delayed API request approach.

```text
User enters search
        ↓
Previous timer cleared
        ↓
Wait for typing pause
        ↓
API request
        ↓
NewsAPI response
        ↓
Update Context state
        ↓
Render new articles
```

This helps prevent unnecessary API requests while the user is actively typing.

---

# 🌗 Theme Architecture

The application uses CSS custom properties for its theme system.

Examples include:

```css
--page-bg
--surface
--card
--text
--muted
--border
--brand
--brand-strong
```

The application switches between theme classes rather than duplicating the entire UI stylesheet.

---

# 🛡️ Error & Fallback Handling

The application does not completely depend on a successful API response.

If NewsAPI fails or returns no articles:

```text
NewsAPI
   │
   ├── Success ───────► Display API articles
   │
   └── Failure ───────► Fallback articles
```

This provides a better user experience during API failures.

---

# 📱 Responsive Behavior

The application adapts its layout based on screen size.

### Desktop

* Centered search bar
* Full category navigation
* Multi-column news grid

### Tablet

* Reduced grid columns
* Responsive spacing
* Flexible navigation

### Mobile

* Mobile search interaction
* Horizontal category scrolling
* Single-column news cards
* Touch-friendly controls

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

Check your versions:

```bash
node -v
npm -v
```

---

# 📥 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd My-News-App
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory.

```env
VITE_API_KEY=your_newsapi_key
```

Replace:

```text
your_newsapi_key
```

with your actual NewsAPI key.

### Important

Never commit your `.env` file to GitHub.

Make sure `.env` is included in `.gitignore`.

---

# ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

Open it in your browser.

---

# 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🧹 Linting

Run ESLint:

```bash
npm run lint
```

---

# 🌐 Deployment

This project can be deployed using modern frontend hosting platforms.

General deployment process:

```text
GitHub Repository
       ↓
Connect Repository
       ↓
Install Dependencies
       ↓
Build Project
       ↓
Configure Environment Variable
       ↓
Deploy
```

### Environment Variable

Add:

```text
VITE_API_KEY
```

to your hosting provider's environment variable settings.

---

# 📸 Screenshots

Add project screenshots here after deployment.

Recommended structure:

```text
screenshots/
├── desktop-light.png
├── desktop-dark.png
├── mobile.png
├── search.png
└── categories.png
```

Then document them in this section.

---

# 🎯 What I Learned

Building Morning News helped me strengthen my understanding of:

* React component architecture
* React Context API
* REST API integration
* Axios
* Asynchronous JavaScript
* API error handling
* Responsive UI development
* CSS custom properties
* Theme architecture
* Search interactions
* Reusable components
* Loading and empty states
* Modern UI/UX implementation

---

# 🔮 Future Improvements

Potential future improvements include:

* User authentication
* Save/bookmark articles
* Reading history
* Personalized news feeds
* Advanced filtering
* Pagination / infinite scrolling
* Backend API
* MongoDB integration
* User profiles
* Admin dashboard
* Article management
* Personalized recommendations
* PWA support
* Offline reading
* Better caching
* Automated testing

---

# 👨‍💻 Author

**Piyush Pal**

Frontend Developer / MERN Stack Developer

### Connect With Me

* GitHub: `YOUR_GITHUB_URL`
* LinkedIn: `YOUR_LINKEDIN_URL`
* Portfolio: `YOUR_PORTFOLIO_URL`
* Email: `YOUR_EMAIL`

---

# 📄 License

This project is created for educational, portfolio, and demonstration purposes.

---

## ⭐ If you found this project interesting

Feel free to explore the code, experiment with the application, or use it as inspiration for your own projects.
