# Week 5

## Hooks are ...

`const [firstname, setFirstName] = useState()`

- firstName is overwritten with SetFirstName

## Study:

- event
- htmlFor

## Notes:

- We identify form ID's by name
- Using destructing makes it easier to read the code (not for beginners though)
- If the property of useState is not defined, it will be added.

## Multiple pages in SPA

### Router (know these)

- RouterProvider
- createBrowserRouter
  ...

### Todo

1. Install react-router-dom
2. Create folders:

- pages
- routes

3. Inside pages:

- New files (components): Root, List, About.

4. Inside routes:

- New file: appRoutes.jsx

### Browser Router

- import browser router
- declare router in file

## Nested component

# Recap:

- router provider
- Outlet

# TODO: Put all the lists back

# brew install tree

`tree -I 'node_modules'`

.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│ └── vite.svg
├── src
│ ├── App.css
│ ├── App.jsx
│ ├── Backups.js
│ ├── assets
│ │ └── react.svg
│ ├── components
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ ├── Header.jsx
│ │ ├── Header.module.css
│ │ └── versions
│ │ └── Card.jsx
│ ├── data
│ │ └── personsData.js
│ ├── index.css
│ ├── main.jsx
│ ├── pages
│ │ ├── About.jsx
│ │ ├── ErrorPage.jsx
│ │ ├── List.jsx
│ │ ├── Root.jsx
│ │ └── versions
│ │ └── Root.jsx
│ └── routes
│ ├── appRoutes.jsx
│ └── version
│ └── appRoutes.jsx
└── vite.config.js

# Data flow between List.jsx and Card.jsx

1. Parent passes:

   - Initial data (via props)
   - onSave function (via props)

2. Child updates form:

   - Local state (formValues) stores temporary edits.

3. Child calls onSave:

   - handleSave collects formValues.
   - Calls parent’s onSave(formValues).

4. Parent updates state:
   - Updates centralized data with new values.
   - Re-renders children with updated props.
