import React from 'react'

function Pretraga({pretrazi}) {
  return (
    <div className="pretraga">
        {/* <h3>Pretraži činjenice</h3> */}
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Pretrazi" onInput={pretrazi} />
      </form>
    </div>
  )
}

export default Pretraga
