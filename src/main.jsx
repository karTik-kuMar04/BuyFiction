import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Home from './Components/MainContent/Home.jsx'
import Search from './Components/MainContent/search.jsx'
import Cart from './Components/MainContent/Cart.jsx'
import User from './Components/MainContent/User.jsx'
import WishList from './Components/MainContent/WishList.jsx'
import { allBooks } from './Components/Products/mangaProducts.js'
import Book from './Components/MainContent/Book.jsx'
import Web from './Components/MainContent/Web.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:"", element: <Web />},
      {path:"home", element: <Home />},
      {path:"search", element: <Search />},
      {path:"cart", element: <Cart />},
      {path:"user", element: <User />},
      {path:"wishlist", element: <WishList />},
      {path: "book/:id", element: <Book />}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
