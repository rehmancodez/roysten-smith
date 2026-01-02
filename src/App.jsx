
import { Routes, Route, BrowserRouter } from "react-router-dom";



import Home from "./assets/home"
import Dashboard from "./assets/Dashboard";
import Collection from "./assets/Collection";



function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/collection" element={<Collection />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
