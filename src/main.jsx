import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/MainContent/Home.jsx'
import Search from './Components/MainContent/search.jsx'
import Cart from './Components/MainContent/Cart.jsx'
import User from './Components/MainContent/User.jsx'
import WishList from './Components/MainContent/WishList.jsx'
import { allBooks } from './Components/Products/mangaProducts.js'
import Book from './Components/MainContent/Book.jsx'
import LandingPage from './Components/MainContent/Web.jsx'
import Buy from './Components/MainContent/buy.jsx'
import Layout2 from './Layout2.jsx'
import CartBuy from './Components/MainContent/cartbuy.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "home", element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "book/:id", element: <Book /> },

    ]
  },
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "buy/:id",
        element: <Buy />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "wishlist",
        element: <WishList />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "Cart/buy",
        element: <CartBuy />
      }
    ]
  },

])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
