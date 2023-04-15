import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage'
import './index.css'
import Contact from './routes/Contact'
import { loader } from './routes/Root'
const router = createBrowserRouter([{
  path: '/',
  element:<Root />,
  errorElement:<ErrorPage />,
  loader,
  children: [{
    path: '/contacts/:contactId',
    element: <Contact />
  }]
},])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
