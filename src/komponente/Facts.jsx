import React from 'react'
import FactCard from './FactCard'
import { useNavigate } from 'react-router-dom';
import Pretraga from './Pretraga';

function Facts({facts, setOneFact,pretrazi}) {

   let navigate = useNavigate();

   function prikaziDetalje(fact){

    setOneFact(fact);
    navigate('/info');
  }

  return (
    <div>
      <Pretraga pretrazi={pretrazi}/>
      {
        facts.map(fact => (
            <FactCard key={fact.id} fact={fact} prikaziDetalje={prikaziDetalje} />
        ))
      }
    </div>
  )
}

export default Facts
