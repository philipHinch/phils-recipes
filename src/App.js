import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Country from './pages/Country';
import Create from './pages/Create';
import Favourite from './pages/Favourite';
import About from './pages/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/country" element={<Country />} />
            <Route path="/create" element={<Create />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/country" element={<Country />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
