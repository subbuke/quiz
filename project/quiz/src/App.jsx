import './App.css'
import Home from './Home'
import EasyHistory from './quiz/History/EasyHistory'
import PageHistory from './quiz/History/PageHistory'
import MedHistory from './quiz/History/MedHistory'
import HardHistory from './quiz/History/HardHistory'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/History' element={<PageHistory />} />
        <Route path='/History/EasyHistory' element={<EasyHistory />} />
        <Route path='/History/MedHistory' element={<MedHistory />} />
        <Route path='/History/HardHistory' element={<HardHistory />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
