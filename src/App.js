import './App.css'; 
import HomePage from "./components/HomePage";
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMePage';
import Stats from './components/StatsPage';
import ArtPage from './components/ArtPage';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/art" element={<ArtPage />} />
    </Routes>
     
        
      
    </div>
  );
}

export default App;
