import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import more from './more.png'
import '../css/Card.css'

const Card = (props) => { 
    
    const [car, setCar] = useState({id: 0, name: "", price: "", exterior: "", roof:"", wheels: "", interior: ""})

    useEffect(() => {
        setCar({id: props.id, name: props.name, price: props.price, exterior: props.exterior, roof: props.roof, wheels: props.wheels, interior: props.interior});
    }, [props]);

    return (
        <div className="card">

            <div>
                <h3>{'🚘  ' + car.name}</h3>
                <p>{'🚟 Price: ＄' + car.price}</p>
                <p>{'🚋 Exterior: ' + car.exterior}</p>
                <p>{'🎫 Roof: ' + car.roof}</p>
                <p>{'🚜 Wheels: ' + car.wheels}</p>
                <p>{'🚓 Interior: ' + car.interior}</p>
                <div className='linksBtn'>
                    <Link to={'/customcars/' + car.id}>
                        <button>read more</button>
                    </Link>
                    <Link to={'/edit/' + car.id}>
                        <button>edit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card