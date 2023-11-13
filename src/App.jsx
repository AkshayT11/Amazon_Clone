
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import { HomePage, Navbar } from "./Components"

function App() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
