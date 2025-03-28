
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Intro from './pages/Intro';
import Birthplace from './pages/Birthplace';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={ <Home /> } />
        <Route path='/introduction' element={ <Intro /> } />
        <Route path='/birthplace' element={ <Birthplace /> } />
      </Routes>
    </Router>
  );
}

export default App;
