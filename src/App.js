import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Facts from './komponente/Facts';
import FactInfo from './komponente/FactInfo';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Footer from './komponente/Footer';

function App() {

    const [facts, setFacts] = useState([]);
   
    useEffect(() => {
        axios.get('https://catfact.ninja/facts?limit=50').then(res => {
            console.log(JSON.stringify(res));
            setFacts(res.data.data)
        });
    }, []);

    const [oneFact, setOneFact]=useState(facts[0]);
    const [showFacts, setShowFacts]=useState(facts);

    function pretrazi(e){
      let novo=[];
      facts.forEach((fact)=>{
          if(fact.fact.toLowerCase().indexOf(e.target.value.toLowerCase())>-1){
              novo.push(fact)
          }
      })
      setShowFacts(novo);
  }
  
  return(
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Facts  facts={showFacts} setOneFact={setOneFact}  pretrazi={pretrazi}/>} />
          <Route path="/info" element={<FactInfo oneFact={oneFact}/>}/>
        </Routes>
        <Footer/>
      </Router >
    </div>
  );
}

export default App;
