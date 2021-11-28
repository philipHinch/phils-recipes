import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Country from './pages/Country';
import Create from './pages/Create';
import Favourite from './pages/Favourite';
import Footer from './components/Footer';



function App() {

  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)



  return (
    <Router>
      <div className="App">
        <Navbar isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />} />
            {/* <Route path="/category" element={<Category />} /> */}
            <Route path="/country" element={<Country isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />} />
            <Route path="/create" element={<Create isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />} />
            <Route path="/favourite" element={<Favourite isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />} />
            <Route path="/country" element={<Country isHamburgerClicked={isHamburgerClicked} setIsHamburgerClicked={setIsHamburgerClicked} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
