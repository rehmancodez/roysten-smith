
import { Routes, Route, BrowserRouter } from "react-router-dom";



import Home from "./assets/Home"
import Dashboard from "./assets/Dashboard";
import Collection from "./assets/Collection";
import Menifiest from "./assets/Menifest";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/menifest" element={<Menifiest/>} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
