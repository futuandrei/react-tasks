import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root';
import List from '../pages/List';
import About from '../pages/About';

export const router = createBrowserRouter([
    { path: '/', element: <Root /> },
    { path: '/list', element: <List /> },
    { path: '/about', element: <About /> }
]);