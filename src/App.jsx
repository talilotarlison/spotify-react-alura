import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SectionPlaylists from './components/SectionPlaylists/SectionPlaylists'


function App() {
  return (
    <>
      <Sidebar/>
      <Main>
        <Header/>
        <SectionPlaylists/>
      </Main>
      <Footer/>
    </>
  )
}

export default App
