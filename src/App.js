import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Facts from './komponente/Facts';
import FactInfo from './komponente/FactInfo';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {

  const [facts, setFacts] = useState([]);
  const[oneFact, setOneFact]=useState(facts[0])

    useEffect(() => {
        axios.get('https://catfact.ninja/facts?limit=50').then(res => {
            console.log(JSON.stringify(res))
            setFacts(res.data.data)
        });
    }, []);
  
  return(
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Facts  facts={facts} setOneFact={setOneFact}/>} />
          <Route path="/info" element={<FactInfo oneFact={oneFact}/>}/>
        </Routes>
      </Router >
    </div>
  );
}

export default App;
