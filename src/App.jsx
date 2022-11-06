import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import NavBar from "./NavBar"
import Destination from "./Destination"
import Crew from "./Crew"
import Technology from "./Technology"
import NotFound from "./NotFound"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
