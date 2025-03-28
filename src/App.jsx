
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Intro from './pages/Intro';
import Location from './pages/Location';
import Upload from './pages/Upload';
import Preparing from './pages/Preparing';
import AnalysisMenu from './pages/AnalysisMenu';
import Analysis from './pages/Analysis';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/introduction' element={ <Intro /> } />
        <Route path='/location' element={ <Location /> } />
        <Route path='/upload' element={ <Upload /> } />
        <Route path='/preparing' element={ <Preparing /> } />
        <Route path='/analysis-menu' element={ <AnalysisMenu /> } />
        <Route path='/analysis' element={ <Analysis /> } />
      </Routes>
    </Router>
  )
}

export default App;
