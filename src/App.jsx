
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Intro from './pages/Intro';
import Location from './pages/Location';
import Upload from './pages/Upload';
import Preparing from './pages/Preparing';
import AnalysisMenu from './pages/AnalysisMenu';
import Analysis from './pages/Analysis';
import { useState } from 'react';
import gsap from 'gsap'

function App() {

  const [demos, setDemos] = useState()

  gsap.to('.outline1', { rotation: '+=360', duration: 30, repeat: -1, ease: 'none' })
  gsap.to('.outline2', { rotation: '+=360', duration: 40, repeat: -1, ease: 'none' })
  gsap.to('.outline3', { rotation: '+=360', duration: 50, repeat: -1, ease: 'none' })

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/introduction' element={ <Intro /> } />
        <Route path='/location' element={ <Location /> } />
        <Route path='/upload' element={ <Upload setDemos={setDemos} /> } />
        <Route path='/preparing' element={ <Preparing /> } />
        <Route path='/analysis-menu' element={ <AnalysisMenu /> } />
        <Route path='/analysis' element={ <Analysis demos={demos} /> } />
      </Routes>
    </Router>
  )
}

export default App;
