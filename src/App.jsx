
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Intro from './pages/Intro';
import Birthplace from './pages/Birthplace';
import Upload from './pages/Upload';
import Preparing from './pages/Preparing';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/introduction' element={ <Intro /> } />
        <Route path='/birthplace' element={ <Birthplace /> } />
        <Route path='/upload' element={ <Upload /> } />
        <Route path='/preparing' element={ <Preparing /> } />
      </Routes>
    </Router>
  )
}

export default App;
