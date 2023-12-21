import React from 'react'

function FactCard({fact,prikaziDetalje}) {
  return (
    <div class="card">
        <div class="card-header">
            <img src="https://static.vecteezy.com/system/resources/previews/009/665/304/original/cute-kitty-cat-head-cartoon-element-free-png.png" className="card-img-top" alt="cat"></img>
            <i>#Fact</i>
        </div>
        <div class="card-body">
            <p class="card-text"><b>{fact.fact}</b></p>
            <button className="btn btn-primary btn-sm" onClick={()=>prikaziDetalje(fact)}>Detaljnije</button>
        </div>
    </div>
  )
}

export default FactCard
