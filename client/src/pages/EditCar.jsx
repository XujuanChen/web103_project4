import React, {useEffect, useState} from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'

const EditCar = () => {
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
        }
        fetchCarById()
    },[id])

    const handleChange = (event) => {
        const { name, value } = event.target

        setCar((prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCar = (event) => {
        event.preventDefault()

        const options = {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        }

        fetch(`http://localhost:3001/cars/${id}`, options)
        window.location = '/customcars/'
    }

    const deleteCar= (event) => {
        event.preventDefault()

        const options = {
            method: 'DELETE'
        }

        fetch(`http://localhost:3001/cars/${id}`, options)
        window.location = '/customcars/'
    }


    return (
        <div>
            <form className='form-details'>
                <label>Name</label> <br />
                <input type='text' id='name' name='name' value={car.name} onChange={handleChange} /><br />
                <br/>

                <label htmlFor="exterior">exterior ☞</label>
                <select className='exterior' name="exterior" id="exterior" value={car.exterior} onChange={handleChange}>
                    <option value="all">-- Please choose the exterior --</option>
                    <option value="Silver Flare Metallic $500">Silver Flare Metallic $500</option>
                    <option value="Arctic White $500">Arctic White $500</option>
                    <option value="Red Nist Metallic TintCoat $2000">Red Nist Metallic TintCoat $2000</option>
                    <option value="Hypersonic Grey $500">Hypersonic Grey $500</option>
                    <option value="Caffeine Metallic $750">Caffeine Metallic $750</option>
                    <option value="Black $500">Black $500</option>
                </select>

                <label htmlFor="roof">Roof ☞</label>
                <select className='roof' name="roof" id="roof" value={car.roof} onChange={handleChange}>
                    <option value="all">-- Please choose the roof--</option>
                    <option value="CarbonFlash Nacelles $1000">CarbonFlash Nacelles $1000</option>
                    <option value="CarbonFlash Full $1000">CarbonFlash Full $1000</option>
                    <option value="prime">Visible Carbon Fiber $2000 prime</option>
                    <option value="prime">Transparent $1000 prime</option>
                </select>

                <label htmlFor="wheels">wheels ☞</label>
                <select className='wheels' name="wheels" id="wheels" value={car.wheels} onChange={handleChange}>
                    <option value="all">-- Please choose the wheels--</option>
                    <option value="Ultra Bright Trident Spoke $500">Ultra Bright Trident Spoke $500</option>
                    <option value="Ultra Bright Machined Spoke $500">Ultra Bright Machined Spoke $500</option>
                    <option value="Carbon Flash Spoke with Red Stripe $750">Carbon Flash Spoke with Red Stripe $750 </option>
                    <option value="Bright Silver Open Spoke $500">Bright Silver Open Spoke $500</option>
                    <option value="Spectra Grey Machined Trident Spoke $600">Spectra Grey Machined Trident Spoke $600</option>
                    <option value="Gloss Black Spoke $600">Gloss Black Spoke $600</option>
                </select>

                <label htmlFor="interior">interior ☞</label>
                <select className='interior' name="interior" id="interior" value={car.interior} onChange={handleChange}>
                    <option value="all">-- Please choose the interior --</option>
                    <option value="Adrenaline Red $1000">Adrenaline Red $1000</option>
                    <option value="Jet Black with Yellow Stitching $1000">Jet Black with Yellow Stitching $1000</option>
                    <option value="Sky Cool Grey $1000">Sky Cool Grey $1000</option>
                    <option value="Natural Dipped $1000">Natural Dipped $1000</option>
                    <option value="Jet Black $100">Jet Black $100</option>
                </select>

                {/* <label>price</label><br />
                <input type='text' id='price' name='price' value={car.price} onChange={handleChange} ></input>
                <br/>

                <label>exterior</label><br />
                <input type='text' id='exterior' name='exterior' value={car.exterior} onChange={handleChange} /><br />
                <br/>

                <label>roof</label><br />
                <input type='text' id='roof' name='roof' value={car.roof} onChange={handleChange} /><br />
                <br/>

                <label>wheels</label><br />
                <input type="text" id='wheels' name='wheels' value={car.wheels} onChange={handleChange}/><br />
                <br/>

                <label>interior</label><br />
                <input type='text' id='interior' name='interior' value={car.interior} onChange={handleChange} /><br />
                <br/> */}
                <button style={{width:300}}>🏆＄ {car.price}</button>
                <div className='flex-btns'>
                    <input className='submitButton' type='submit' value='Update' onClick={updateCar} />
                    <button className='deleteButton' onClick={deleteCar}>Delete</button>
                </div>

            </form>
        </div>
    )
}

export default EditCar