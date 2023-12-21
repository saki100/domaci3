import OneBreedCard from './OneBreedCard';
import axios from 'axios';
import { useState,useEffect } from 'react';

function CatsBreeds() {
    const[breeds, setBreeds]=useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://catfact.ninja/breeds?limit=30'); 
            console.log(response.data.data);
            setBreeds(response.data.data);
          } catch (error) {
            console.error('Error loading data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div>
            <div className='allbreeds'>
      {breeds !==null ? breeds.map(
                (b) => (
                    <OneBreedCard breed={b} key={b.breed} />
                )
            ): "" }
            </div>
    </div>
  )
}

export default CatsBreeds
