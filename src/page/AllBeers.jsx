import './AllBeers.css';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import BeerDetails from './BeerDetails';


function AllBeers({beers}) {
    return (
        <>
        <Header/>
            <h1>All beers</h1>
        <div className='AllBeers'>
            <ul>
                {beers.map((beer)=> {
                    return (
                        <>
                        <Link to={`/beers/${beer._id}`} element={<BeerDetails beers={beers}/>} >
                            <div className="div-beer" key={beer._id}>
                                <div className='image'>
                                        <img src={beer.image_url} alt="beer"/>
                                </div>
                                <div className='infos'>
                                    <h2>{beer.name}</h2>
                                    <h3>{beer.tagline}</h3>
                                    <span><strong>Created by:</strong>{beer.name}</span>
                                </div>
                            </div>
                        </Link>
                        <hr/>
                        </>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default AllBeers