import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Cart from './components/Cart'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Navbaar from './components/Navbaar'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbaar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
