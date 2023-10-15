import React, { useEffect, useState } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'

const CarDetails = () => {
    const { id } = useParams()
    const [car, setCar] = useState({
        id:0, 
        name:"", 
        price:0, 
        exterior:"", 
        roof:"", 
        wheels:"", 
        interior:"" 
    })
    
    useEffect(() => {
        const fetchCarById = async() => {
            const res = await fetch(`http://localhost:3001/cars/${id}`)
            const json = await res.json()
            setCar(json)
            console.log(car)
        }
        fetchCarById()
    },[id])
    
    
    return (
        <div>
            <main>
                <div className='car-details'>
                    <h2>Car Details</h2>
                    <h2>{car.name}</h2>
                    <p>{'🚟 Price: ＄' + car.price}</p>
                    <p>{'🚋 Exterior: ' + car.exterior}</p>
                    <p>{'🎫 Roof: ' + car.roof}</p>
                    <p>{'🚜 Wheels: ' + car.wheels}</p>
                    <p>{'🚓 Interior: ' + car.interior}</p>
                </div>
            </main>
        </div>
    )
}

export default CarDetails