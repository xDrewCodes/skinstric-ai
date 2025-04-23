
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Intro from './pages/Intro';
import Upload from './pages/Upload';
import Preparing from './pages/Preparing';
import AnalysisMenu from './pages/AnalysisMenu';
import Analysis from './pages/Analysis';
import { useState } from 'react';
import Landing from './pages/Landing';
import axios from 'axios';

function App() {

  const [demos, setDemos] = useState()

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/introduction' element={<Intro />} />
        <Route path='/upload' element={<Upload setDemos={setDemos} demos={demos} />} />
        <Route path='/preparing' element={<Preparing />} />
        <Route path='/analysis-menu' element={<AnalysisMenu />} />
        <Route path='/analysis' element={<Analysis demos={demos} />} />
      </Routes>
    </Router>
  )
}

export default App;
