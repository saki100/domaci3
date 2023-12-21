import React from 'react'

function OneBreedCard({breed}) {
  return (
    <div className='beerdCard'>
      <h3>Rasa: {breed.breed}</h3>
      <h3>Zemlja porekla: {breed.country}</h3>
      <h3>Dlaka: {breed.coat}</h3>
      <h3>Šara: {breed.pattern}</h3>

    </div>
  )
}

export default OneBreedCard
