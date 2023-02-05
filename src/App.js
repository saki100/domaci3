import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Facts from './komponente/Facts';

function App() {
  
  return(
    <div>
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Facts/>} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
