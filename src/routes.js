import React from 'react';
import Home from './pages/HomePage/Home';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage'
import NotFound from './pages/NotFoundPage/NotFound';

const routes = [
    {
        to: '/',
        exact: true,
        component : () => <Home/>
    },
    {
        to: '/products',
        exact: false,
        component : () => <ProductListPage/>
    },
    {
        to: '/product/add',
        exact: false,
        component : ( {history} ) => <ProductActionPage history = {history}/>
    },
    {
        to: '/product/:id/edit',
        exact: false,
        component : ( {history, match} ) => <ProductActionPage match={match} history={history} />
    },
    {
        to: '',
        exact: false,
        component : () => <NotFound/>
    }
]
export default routes;