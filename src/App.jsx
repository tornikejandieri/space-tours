import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import NavBar from "./NavBar";
import data from "./data.json"
import { useState } from "react";
import Destination from "./Destination";



function App() {
const [destination, setDestination] = useState(data)

  return (
    <BrowserRouter>
     <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
