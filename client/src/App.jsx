import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewCars from './pages/ViewCars'
import EditCar from './pages/EditCar'
import CreateCar from './pages/CreateCar'
import CarDetails from './pages/CarDetails'
import './App.css'
// import { useState, useEffect } from 'react';
// import Gifts from './pages/Gifts'

const App = () => {
  // const [gifts, setGifts] = useState([]);
  // useEffect(() => {
  //   const fetchGifts = async () => {
  //     const response = await fetch('http://localhost:3001/gifts')
  //     const data = await response.json()
  //     setGifts(data)
  //   }
  //   fetchGifts()
  // }, []);

  let element = useRoutes([
    {
      path: '/',
      element: <CreateCar title='BOLT BUCKET | Customize' />
    },
    // {
    //   path: "/",
    //   element: <Gifts />
    // },
    {
      path:'/customcars',
      element: <ViewCars title='BOLT BUCKET | Custom Cars' />
    },
    {
      path: '/customcars/:id',
      element: <CarDetails title='BOLT BUCKET | View' />
    },
    {
      path: '/edit/:id',
      element: <EditCar title='BOLT BUCKET | Edit' />
    }
  ])

  return (
    <div className='app'>

      <Navigation />

      { element }

    </div>
  )
}

export default App