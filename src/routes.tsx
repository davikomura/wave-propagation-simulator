import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { SimulationPage } from './pages/SimulationPage.tsx';
import { ExplorePage } from './pages/ExplorePage.tsx';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/simulation",
                element: <SimulationPage />,
            },
            {
                path: "/explore",
                element: <ExplorePage />,
            },
        ],
    }
];

const router = createBrowserRouter(routes);

export default router;