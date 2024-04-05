import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Gallery from './Component/Gallery'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/gallery",
      element: <><Navbar /><Gallery /></>
    },

    {
      path: "/about",
      element: <><Navbar /><About /></>
    },

    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
  ])


  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
