import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';

const BeerDetails = ({beers}) => {
    const { id } = useParams();

    if(!beers.length) return <p>Loading ...</p>
    
    const beer = beers.filter(beer => beer._id === id);
    console.log(beer)
  return (
    <>
    <Header/>
    <div className='BeerDetails' key={beer._id}>
        <img src={beer[0].image_url} alt={beer.name}/>
    </div>
    </>
  )
}

export default BeerDetails