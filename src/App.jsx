import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import NavBar from "./NavBar";
import data from "./data.json"
import { useState } from "react";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";



function App() {
const [destination, setDestination] = useState(data)

  return (
    <BrowserRouter>
     <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
