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
        {/* <Pretraga pretrazi={pretrazi}/>  */}
        <div className="pretraga">
        {/* <h3>Pretraži činjenice</h3> */}
      <form className="d-flex">
        <input className="form-control me-2" type="search"
         placeholder="Pronadji cinjenicu"
          onInput={pretrazi} />
      </form>
      </div>
      {
        facts.map(fact => (
            <FactCard key={fact.id} fact={fact} prikaziDetalje={prikaziDetalje} />
        ))
      }
    </div>
  )
}

export default Facts
