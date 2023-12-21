import React from 'react'
import { Link } from 'react-router-dom'

function FactInfo({oneFact}) {
  return (
    <div class="card text-center">
        <div class="card-header">
        <img src="https://static.vecteezy.com/system/resources/previews/009/665/304/original/cute-kitty-cat-head-cartoon-element-free-png.png" className="card-img-top" alt="cat"></img>
            Sve činjenice preuzete su pomoću javnog API-ja
        </div>
        <div class="card-body">
            <h5 class="card-title">Fact Info</h5>
            <p class="card-text">{oneFact.fact}</p>
            <p class="card-text">Broj karaktera: {oneFact.length}</p>
            <Link to="/">
             <button class="btn btn-primary">Nazad</button>
            </Link>
        </div>
        <div class="card-footer text-muted">
            <a href="https://catfact.ninja/#/Facts/getFacts">Link ka API dokumentaciji</a>
        </div>
    </div>
  )
}

export default FactInfo
