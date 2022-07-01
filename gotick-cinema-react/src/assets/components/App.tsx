import { useState } from 'react'
import '../styles/App.css'
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";

function App() {

  return (
    <div className="App">
      <Header btnValue={'Login'} />
      <Filters />
      <Footer textValue={'Created in 2022'}/>
    </div>
  )
}

export default App
