import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationsPage from "./DestinationsPage";
import Home from './Home'
import NavBar from "./NavBar";
import data from "./data.json"
import { useState } from "react";



function App() {
const [destination, setDestination] = useState(data)

  return (
    <BrowserRouter>
     <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<DestinationsPage destination={destination} />} />
      </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
