import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './services/serviceWorkers/serviceWorker';
import Login from './scenes/Login';
import Home from './scenes/Home';
import Dashboard from './scenes/Home/scenes/Dashboard';
import Universities from './scenes/Home/scenes/Universities';
import Ambassadors from './scenes/Home/scenes/Ambassadors';
import AddUniversity from './scenes/Home/scenes/Universities/scenes/AddUniversity';
import AddAmbassador from './scenes/Home/scenes/Ambassadors/scenes/AddAmbassador';
import { SingleRoute } from './interfaces';
import Categories from './scenes/Home/scenes/Category';
import UpsertItem from './scenes/Home/scenes/UpsertItem';
import UpsertCategory from './scenes/Home/scenes/UpsertCategory';
import SubCategories from './scenes/Home/scenes/Category/scenes/subcategories';
import Items from './scenes/Home/scenes/Category/scenes/subcategories/scenes';
import UpsertSubCategory from './scenes/Home/scenes/UpsertSubCategory';
import Certificates from './scenes/Home/scenes/Certificates';
import UpsertCertificate from './scenes/Home/scenes/UpsertCertificate';
const routes: SingleRoute[] = [
  {
    path: '/dashboard/login',
    exact: true,
    component: Login,
  },
  {
    path: '/dashboard',
    exact: false,
    component: Home,
    routes: [
      {
        path: '/dashboard/home',
        exact: true,
        component: Dashboard,
      },
      {
        path: '/dashboard/universities',
        exact: true,
        component: Universities,
      },
      {
        path: '/dashboard/ambassadors',
        exact: true,
        component: Ambassadors,
      },
      {
        path: '/dashboard/universities/add',
        exact: true,
        component: AddUniversity,
      },
      {
        path: '/dashboard/ambassadors/add',
        exact: true,
        component: AddAmbassador,
      },
      {
        path: '/dashboard/academix/item/add',
        exact: true,
        component: UpsertItem,
      },
      {
        path: '/dashboard/academix/sub-category/add',
        exact: true,
        component: UpsertSubCategory,
      },
      {
        path: '/dashboard/academix/category/add',
        exact: true,
        component: UpsertCategory,
      },
      {
        path: '/dashboard/academix/categories',
        exact: true,
        component: Categories,
      },
      {
        path: '/dashboard/academix/:categoryId/:categoryName',
        exact: true,
        component: SubCategories,
      },
      {
        path:
          '/dashboard/academix/:categoryId/:categoryName/:subCategoryId/:subCategoryName',
        exact: true,
        component: Items,
      },
      {
        path: '/dashboard/academix/item/:itemId/edit',
        exact: true,
        component: UpsertItem,
      },
      {
        path: '/dashboard/academix/sub-category/:subCategoryId/edit',
        exact: true,
        component: UpsertSubCategory,
      },
      {
        path: '/dashboard/academix/category/:categoryId/edit',
        exact: true,
        component: UpsertCategory,
      },
      {
        path: '/dashboard/fellowship/certificates',
        exact: true,
        component: Certificates,
      },
      {
        path: '/dashboard/fellowship/certificate/add',
        exact: true,
        component: UpsertCertificate,
      },
      {
        path: '/dashboard/fellowship/certificate/:id/edit',
        exact: true,
        component: UpsertCertificate,
      },
    ],
  },
];

ReactDOM.render(<App routes={routes} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
