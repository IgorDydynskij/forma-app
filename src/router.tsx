import {Suspense, lazy} from 'react';
import {Navigate} from 'react-router-dom';
import {RouteObject} from 'react-router';

import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
    (
        <Suspense fallback={<SuspenseLoader/>}>
            <Component {...props} />
        </Suspense>
    );

// Pages

const Login = Loader(lazy(() => import('src/content/login')));

// Dashboards

const Home = Loader(lazy(() => import('src/content/dashboards/Countries')));

// Status

const Status404 = Loader(
    lazy(() => import('src/content/pages/Status/Status404'))
);

const routes: RouteObject[] = [
    {
        path: '',
        element: <BaseLayout/>,
        children: [
            {
                path: '/',
                element: <Login/>
            },
            {
                path: 'login',
                element: <Navigate to="/" replace/>
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        element: <Home replace/>
                    },
                    // {
                    //     path: '',
                    //     element: <Navigate to="Home" replace/>
                    // },

                    {
                        path: '404',
                        element: <Status404/>
                    },
                ]
            },
            {
                path: '*',
                element: <Status404/>
            }
        ]
    }
];

export default routes;
