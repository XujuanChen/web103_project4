import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../components/Card';

const ViewCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
      const fetchCars = async () => {
        const response = await fetch('http://localhost:3001/cars')
        const data = await response.json()
        console.log(data)
        setCars(data)
      }
      fetchCars()
    }, []);

    return (
        <div>
            <main>
            {
                cars && cars.length > 0 ?
                cars.map((car) => 
                  <Card key={car.id} id={car.id} 
                        name={car.name} 
                        price={car.price} 
                        exterior={car.exterior}
                        roof={car.roof}
                        wheels={car.wheels}
                        interior={car.interior}
                        />
                ) : <h3 className="noResults">{'No Cars Yet 😞'}</h3>
            }
            </main>
        </div>
    )
}

export default ViewCars