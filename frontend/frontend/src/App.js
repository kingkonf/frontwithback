import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Signup from './component/Signup';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Footer/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
