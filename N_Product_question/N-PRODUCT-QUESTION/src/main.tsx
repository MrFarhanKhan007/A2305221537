import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.tsx'
import ProductLists from './components/ProductLists.tsx'

const router= createBrowserRouter([
  {
    path: "/",
    element: <ProductDetails/>,
  },
  {
    path: "/product/:id",
    element: <ProductLists />,
  },
]
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider
   router={router}
   />
  </React.StrictMode>,
)
