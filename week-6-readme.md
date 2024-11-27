# Week 6

education.github.com

Last session:

- React router
  - RouterProvider:
  - createBrowserRouter:
    - What is BrowserRouter?
    - Margit is using ...
  - Link
  - NavLink
  - Outlet contains all the children

├─── main.jsx (main entry point)

## Dynamic routes:

### Declare dynamic routes (appRoutes.jsx):

"/:id" Colon tells that dynamic data should be used. Will look for the number we will pass.

### Use dynamic routes (List.jsx)

#### Using buttons

- Use navigate hook

# Task

- In the demo app, update each card to include a secondary open that opens dedicated page
- Add a back button

## Use Effect

## Fetch or Axios?

Fetch is Vanilla JS, Axios is 3rd party library.
Difference is to use Axios we have to install it.
Axios Get vs. Fetc: With Axios, to use we have to refer eg. `axios.get`
Axios with the get makes the .json for us, so we don't have to ask for it.
