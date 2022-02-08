import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from './components/pages/About'
import Privacy from './components/pages/Privacy'
import Scrolltop from './components/Scrolltop'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Scrolltop>
      <main>
        <Routes onUpdate={() => console.log('fart')}>
          <Route path='/' element={<App />} />
          <Route path='about' element={<About />} />
          <Route path='privacy' element={<Privacy />} />
        </Routes>
      </main>
    </Scrolltop>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
)

