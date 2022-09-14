import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './page/Homepage';
import AllBeers from './page/AllBeers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BeerDetails from './page/BeerDetails';
import RandomBeer from './page/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
  const config = {
      method: 'get',
      url: 'https://ih-beers-api2.herokuapp.com/beers',
      headers: { }
  };
  
  axios(config)
  .then(function (response) {
      console.log(JSON.stringify(response.data));
      setBeers(response.data)
  })
  .catch(function (error) {
      console.log(error);
  })}, [])

  const addBeer = (newBeer) => {
    setBeers({...beers, newBeer})
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/beers" element={<AllBeers beers={beers} />} />
          <Route path="/beers/:id" element={<BeerDetails beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer beers={beers}/>} />
        <Route path="/new-beer" element={<NewBeer addBeer={addBeer} />} /> 
      </Routes>
 
    </div>
  );
}

export default App;
