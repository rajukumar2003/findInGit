import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar';


function App() {

  return (
    <section className=' p-20 mx-40' >

      <Nav/>
      <SearchBar />

    </section>
  )
}

export default App
