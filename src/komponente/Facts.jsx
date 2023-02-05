import React from 'react'
import FactCard from './FactCard'

function Facts({facts}) {
  return (
    <div>
      {
        facts.map(fact => (
            <FactCard key={fact.id} fact={fact} />
        ))
      }
    </div>
  )
}

export default Facts
