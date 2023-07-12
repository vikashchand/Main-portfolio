import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'

import Experiences from './components/Experiences/Experiences'

import Contact from './components/Contacts/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import ParticleBackground from './components/ParticleBackground'



const App = () => {
  return (
    <>
<ParticleBackground/>
<Header/>
<Nav/>
<About/>
<Experiences/>

<Portfolio/>

<Contact/>
<Footer/>


    </>
  )
}

export default App