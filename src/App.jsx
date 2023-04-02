import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Content />
      <Footer />
    </div>
  )
}

export default App
