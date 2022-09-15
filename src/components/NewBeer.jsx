import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
import './NewBeer.css'

const NewBeer = ({addBeer}) => {
    const initialState = {
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:0,
        contributed_by:""
    }

    const [newBeer, setNewBeer] = useState(initialState);
    
    const handleChange = (e) => {
        setNewBeer({...newBeer, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBeer(newBeer);
        setNewBeer(initialState);
    }

  return (
    <>
    <Header/>
    <div className='NewBeer'>

        {/* name - must be type text
        tagline - must be type text
        description - must be type text
        first_brewed - must be type text
        brewers_tips - must be type text
        attenuation_level - must be type number !!!
        contributed_by - must be type text */}

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" value={newBeer.name} id="name" onChange={handleChange}/>

            <label htmlFor="tagline">Tagline</label>
            <input type="text" value={newBeer.tagline} id="tagline" onChange={handleChange}/>

            <label htmlFor="description">Description</label>
            <input type="text" value={newBeer.description} id="description" onChange={handleChange}/>

            <label htmlFor="first_brewed">First Brewed</label>
            <input type="text" value={newBeer.first_brewed} id="first_brewed" onChange={handleChange}/>

            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input type="text" value={newBeer.brewers_tips} id="brewers_tips" onChange={handleChange}/>

            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input type="number" value={newBeer.attenuation_level} id="attenuation_level" onChange={handleChange}/>

            <label htmlFor="contributed_by">Contributed By</label>
            <input type="text" value={newBeer.contributed_by} id="contributed_by" onChange={handleChange}/>

            <button type="submit">ADD NEW</button>
        </form>

        <Link to="/beers">
          <h2>All Beers</h2>
        </Link>
    </div>
    </>
  )
}

export default NewBeer