import './Homepage.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Homepage () {
  return (
    <div className='Homepage'>
        <img src={require("../assets/beers.png")} alt="all beers"/><br/>
        <Link to="/beers">
          <h2>All Beers</h2>
        </Link>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum nihil impedit quidem asperiores possimus culpa quos fugiat repellat, eum nemo, obcaecati sit illum ipsa! Laboriosam reprehenderit eos ad dignissimos.</p>

        <img src={require("../assets/random-beer.png")} alt="random beer"/><br/>
        <Link to="/random-beer">
          <h2>Random Beer</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum nihil impedit quidem asperiores possimus culpa quos fugiat repellat, eum nemo, obcaecati sit illum ipsa! Laboriosam reprehenderit eos ad dignissimos.</p>

        <img src={require("../assets/new-beer.png")} alt="new beer"/><br/>
        <Link to="/new-beer">
          <h2>New Beer</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum nihil impedit quidem asperiores possimus culpa quos fugiat repellat, eum nemo, obcaecati sit illum ipsa! Laboriosam reprehenderit eos ad dignissimos.</p>

    </div>
  )
}

export default Homepage