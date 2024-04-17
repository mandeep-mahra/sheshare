import './App.css';
import Navbar from "./components/navbar.js"
import Options from "./components/optionPage.js"
import Rentpage from "./components/rentPage.js"
import FindPage from "./components/findPage.js"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Options />} />
        <Route path="/find" element={<FindPage />} />
        <Route path="/rent" element={<Rentpage />} />
      </Routes>
    </div>
    
  );
}

export default App;
