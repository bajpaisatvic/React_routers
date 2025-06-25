# React Router App

This is a React application demonstrating nested routing with **React Router v6**, dynamic routes, loaders, and component-based layouts.

## 🚀 Features

* **React Router v6** setup using `createBrowserRouter` and `createRoutesFromElements`
* Nested routes with a common `Layout`
* Dynamic user route (`/user/:userid`)
* Loader function for fetching GitHub data before rendering
* 404 page handling with a wildcard route

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   │   └── About.jsx
│   ├── Contact/
│   │   └── Contact.jsx
│   ├── Github/
│   │   └── github.jsx
│   ├── Home/
│   │   └── Home.jsx
│   └── User/
│       └── User.jsx
├── App.jsx
├── Layout.jsx
├── index.css
└── index.js
```

## 🛠 Installation

1️⃣ Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the development server:

```bash
npm run dev
```

## 🌐 Routes

| Path            | Component   | Description                           |
| --------------- | ----------- | ------------------------------------- |
| `/`             | `Home`      | Home page                             |
| `/about`        | `About`     | About page                            |
| `/contact`      | `Contact`   | Contact page                          |
| `/github`       | `Github`    | GitHub page (with data loader)        |
| `/user/`        | `User`      | User page                             |
| `/user/:userid` | `User`      | Dynamic user page with `userid` param |
| `*`             | `Not Found` | Fallback for unmatched routes         |

## 📝 Example Loader

```jsx
<Route loader={githubInfoLoader} path="github" element={<Github />} />
```

> The loader pre-fetches data before rendering the `Github` component.

## 📦 Built With

* [React](https://reactjs.org/)
* [React Router v6](https://reactrouter.com/en/main)

##
