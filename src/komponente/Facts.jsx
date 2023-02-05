import React from 'react'
import FactCard from './FactCard'
import { useNavigate } from 'react-router-dom';

function Facts({facts, setOneFact}) {

   let navigate = useNavigate();

   function prikaziDetalje(fact){

    setOneFact(fact);
    navigate('/info');
  }

  return (
    <div>
      {
        facts.map(fact => (
            <FactCard key={fact.id} fact={fact} prikaziDetalje={prikaziDetalje} />
        ))
      }
    </div>
  )
}

export default Facts
