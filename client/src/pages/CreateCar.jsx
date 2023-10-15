import React, {useEffect, useState} from 'react'
import '../App.css'

const CreateCar = () => {
    const [car, setCar] = useState({
        id:0, 
        name:"", 
        price:65000,
        exterior:"", 
        roof:"", 
        wheels:"", 
        interior:"" 
    })

    const createCar = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car),
        }

        fetch(`http://localhost:3001/cars`, options)
        window.location = '/customcars/'
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        
        setCar((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
        const num = parseInt(value.replace ( /[^\d.]/g, '' ));
        car.price += num?num:0;
    }

    return (
        <div>
            <form className='form-details'>
                <label>Name</label> <br />
                <input type='text' id='name' name='name' onChange={ handleChange  } />
                <br/>

                <label htmlFor="exterior">exterior ☞</label>
                <select className='exterior' name="exterior" id="exterior" onChange={ handleChange  } >
                    <option value="all">-- Please choose the exterior --</option>
                    <option value="Silver Flare Metallic $500">Silver Flare Metallic $500</option>
                    <option value="Arctic White $500">Arctic White $500</option>
                    <option value="Red Nist Metallic TintCoat $2000">Red Nist Metallic TintCoat $2000</option>
                    <option value="Hypersonic Grey $500">Hypersonic Grey $500</option>
                    <option value="Caffeine Metallic $750">Caffeine Metallic $750</option>
                    <option value="Black $500">Black $500</option>
                </select>

                <label htmlFor="roof">Roof ☞</label>
                <select className='roof' name="roof" id="roof" onChange={ handleChange  } >
                    <option value="all">-- Please choose the roof--</option>
                    <option value="CarbonFlash Nacelles $1000">CarbonFlash Nacelles $1000</option>
                    <option value="CarbonFlash Full $1000">CarbonFlash Full $1000</option>
                    <option value="prime">Visible Carbon Fiber $2000 prime</option>
                    <option value="prime">Transparent $1000 prime</option>
                </select>

                <label htmlFor="wheels">wheels ☞</label>
                <select className='wheels' name="wheels" id="wheels" onChange={ handleChange  } >
                    <option value="all">-- Please choose the wheels--</option>
                    <option value="Ultra Bright Trident Spoke $500">Ultra Bright Trident Spoke $500</option>
                    <option value="Ultra Bright Machined Spoke $500">Ultra Bright Machined Spoke $500</option>
                    <option value="Carbon Flash Spoke with Red Stripe $750">Carbon Flash Spoke with Red Stripe $750 </option>
                    <option value="Bright Silver Open Spoke $500">Bright Silver Open Spoke $500</option>
                    <option value="Spectra Grey Machined Trident Spoke $600">Spectra Grey Machined Trident Spoke $600</option>
                    <option value="Gloss Black Spoke $600">Gloss Black Spoke $600</option>
                </select>

                <label htmlFor="interior">interior ☞</label>
                <select className='interior' name="interior" id="interior" onChange={ handleChange  } >
                    <option value="all">-- Please choose the interior --</option>
                    <option value="Adrenaline Red $1000">Adrenaline Red $1000</option>
                    <option value="Jet Black with Yellow Stitching $1000">Jet Black with Yellow Stitching $1000</option>
                    <option value="Sky Cool Grey $1000">Sky Cool Grey $1000</option>
                    <option value="Natural Dipped $1000">Natural Dipped $1000</option>
                    <option value="Jet Black $100">Jet Black $100</option>
                </select>
                <div className='flex-btns'>
                    <button style={{width:300}}>🏆＄ {car.price}</button>
                    <input className='submitButton' type='submit' value='Create' onClick={createCar} />
                </div>
            </form>
        </div>
    )
}

export default CreateCar