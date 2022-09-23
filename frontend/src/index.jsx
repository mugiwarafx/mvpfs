import React from 'react'

import store from './reducers/store'

import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App'
import ErrorPage from './app/global/404'
import MwlRenderer from './app/global/madewithlove'

import { LogInPage } from './app/LogInPage'
import { ProductPage } from './app/ProductPage'
import { UserPage } from './app/UserPage'

const container = document.getElementById('root')
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LogInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/products',
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
    errorElement: <ErrorPage />,
  },
])

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <MwlRenderer />
  </Provider>
)
