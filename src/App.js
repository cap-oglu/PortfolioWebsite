import './App.css'; 
import HomePage from "./components/HomePage";
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMePage';
import Stats from './components/StatsPage';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="stats" element={<Stats />} />
    </Routes>
     
        
      
    </div>
  );
}

export default App;
