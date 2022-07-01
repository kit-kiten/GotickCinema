import { useState } from 'react'
import '../styles/App.css'
import Header from "./Header";
import Footer from "./Footer";
import Filters from "./Filters";
import Films from "./Films";

function App() {

  return (
    <div className="App">
      <Header btnValue={'Login'} />
      <main className="main">
          <Filters />
          <Films />
      </main>
      <Footer textValue={'Created in 2022'}/>
    </div>
  )
}

export default App
