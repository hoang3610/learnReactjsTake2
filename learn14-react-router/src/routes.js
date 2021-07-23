import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Tours from './components/Tours';
import Product from './components/Product';
import Login from './components/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/tours',
        exact: false,
        main: () => <Tours />
    },
    {
        path: '/product',
        exact: false,
        main: ({match, location}) => <Product match={match} location={location}/>
    },
    {
        path: '/product/:slug',
        exact: false,
        main: ({match, location}) => <Product location={location} match={match}/>
    },
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location={location}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
]

export default routes;