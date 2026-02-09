import './App.css'
import Home from './Home'
import EasyHistory from './quiz/History/EasyHistory'
import PageHistory from './quiz/History/PageHistory'
import MedHistory from './quiz/History/MedHistory'
import HardHistory from './quiz/History/HardHistory'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EasyArt from './quiz/Art/EasyArt'
import MedArt from './quiz/Art/MedArt'
import HardArt from "./quiz/Art/HardArt"
import PageArt from './quiz/Art/PageArt'
import PageBiology from './quiz/Biology/PageBiology'
import EasyBiology from './quiz/Biology/EasyBiology'
import MedBiology from './quiz/Biology/MedBiology'
import HardBiology from './quiz/Biology/HardBiology'
import PageChemistry from './quiz/Chemistry/PageChemistry'
import EasyChemistry from './quiz/Chemistry/EasyChemistry'
import MedChemistry from './quiz/Chemistry/MedChemistry'
import HardChemistry from './quiz/Chemistry/HardChemistry'
import PageDefence from './quiz/Defence/PageDefence'
import EasyDefence from './quiz/Defence/EasyDefence'
import MedDefence from './quiz/Defence/MedDefence'
import HardDefence from './quiz/Defence/HardDefence'
import PageEconomy from './quiz/Economy/PageEconomy'
import EasyEconomy from './quiz/Economy/EasyEconomy'
import MedEconomy from './quiz/Economy/MedEconomy'
import HardEconomy from './quiz/Economy/HardEconomy'
import PageGeopolitics from './quiz/Geopolitics/PageGeopolitics'
import EasyGeopolitics from './quiz/Geopolitics/EasyGeopolitics'
import MedGeopolitics from './quiz/Geopolitics/MedGeopolitics'
import HardGeopolitics from './quiz/Geopolitics/HardGeopolitics'
import PageLiterature from './quiz/Literature/PageLiterature'
import EasyLiterature from './quiz/Literature/EasyLiterature'
import MedLiterature from './quiz/Literature/MedLiterature'
import HardLiterature from './quiz/Literature/HardLiterature'
import PagePhysics from './quiz/Physics/PagePhysics'
import EasyPhysics from './quiz/Physics/EasyPhysics'
import MedPhysics from './quiz/Physics/MedPhysics'
import HardPhysics from './quiz/Physics/HardPhysics'
import PageSpace from './quiz/Space/PageSpace'
import EasySpace from './quiz/Space/EasySpace'
import MedSpace from './quiz/Space/MedSpace'
import HardSpace from './quiz/Space/HardSpace'


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
        <Route path='/Art' element={<PageArt />} />
        <Route path='/Art/EasyArt' element={<EasyArt />} />
        <Route path='/Art/MedArt' element={<MedArt />} />
        <Route path='/Art/HardArt' element={<HardArt />} />
        <Route path='/Biology' element={<PageBiology />} />
        <Route path='/Biology/EasyBiology' element={<EasyBiology/>} />
        <Route path='/Biology/MedBiology' element={<MedBiology />} />
        <Route path='/Biology/HardBiology' element={<HardBiology />} />
        <Route path='/Chemistry' element={<PageChemistry />} />
        <Route path='/Chemistry/EasyChemistry' element={<EasyChemistry />} />
        <Route path='/Chemistry/MedChemistry' element={<MedChemistry />} />
        <Route path='/Chemistry/HardChemistry' element={<HardChemistry />} />
        <Route path='/Defence' element={<PageDefence />} />
        <Route path='/Defence/EasyDefence' element={<EasyDefence />} />
        <Route path='/Defence/MedDefence' element={<MedDefence />} />
        <Route path='/Defence/HardDefence' element={<HardDefence />} />
        <Route path='/Economy' element={<PageEconomy />} />
        <Route path='/Economy/EasyEconomy' element={<EasyEconomy />} />
        <Route path='/Economy/MedEconomy' element={<MedEconomy />} />
        <Route path='/Economy/HardEconomy' element={<HardEconomy />} />
        <Route path='/Geopolitics' element={<PageGeopolitics />} />
        <Route path='/Geopolitics/EasyGeopolitics' element={<EasyGeopolitics />} />
        <Route path='/Geopolitics/MedGeopolitics' element={<MedGeopolitics />} />
        <Route path='/Geopolitics/HardGeopolitics' element={<HardGeopolitics />} />
        <Route path='/Literature' element={<PageLiterature />} />
        <Route path='/Literature/EasyLiterature' element={<EasyLiterature />} />
        <Route path='/Literature/MedLiterature' element={<MedLiterature />} />
        <Route path='/Literature/HardLiterature' element={<HardLiterature />} />
        <Route path='/Physics' element={<PagePhysics />} />
        <Route path='/Physics/EasyPhysics' element={<EasyPhysics />} />
        <Route path='/Physics/MedPhysics' element={<MedPhysics />} />
        <Route path='/Physics/HardPhysics' element={<HardPhysics />} />
        <Route path='/Space' element={<PageSpace />} />
        <Route path='/Space/EasySpace' element={<EasySpace />} />
        <Route path='/Space/MedSpace' element={<MedSpace />} />
        <Route path='/Space/HardSpace' element={<HardSpace />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
