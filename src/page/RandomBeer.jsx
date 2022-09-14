import React from 'react'
import Header from '../components/Header'

const RandomBeer = ({beers}) => {

    if(!beers.length) return <p>Loading ...</p>

    const randomId = parseInt(Math.random()*beers.length)
    console.log(randomId)
    const randomBeer = beers[randomId]

  return (
    <>
    <Header/>
    <div className='RandomBeer'>
        <h1> The random beer you deserve this time is the {randomBeer.name} !</h1>

    </div>
    </>
  )
}

export default RandomBeer