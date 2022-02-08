import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './components/pages/About'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='about' element={<About />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
)

