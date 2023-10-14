import React, { useState, useEffect } from 'react'
import '../css/Gifts.css'
import Card from '../components/Card'


const Gifts = () => {

    const [gifts, setGifts] = useState([]);
    useEffect(() => {
      const fetchGifts = async () => {
        const response = await fetch('http://localhost:3001/gifts')
        const data = await response.json()
        setGifts(data)
      }
      fetchGifts()
    }, []);
    
    
    return (
        <div className="Gifts">
            <main>
            {
                gifts && gifts.length > 0 ?
                gifts.map((gift,index) => 
                    
                   <Card id={gift.id} 
                         image={gift.image} 
                         name={gift.name} 
                         pricepoint={gift.pricepoint} 
                         audience={gift.audience} />

                ) : <h3 className="noResults">{'No Gifts Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Gifts