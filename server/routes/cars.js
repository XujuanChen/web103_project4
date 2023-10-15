import express from 'express'
import CarsController from '../controllers/cars.js'

const carsRouter = express.Router()

carsRouter.get('/', CarsController.getCars)
carsRouter.get('/:id', CarsController.getCarById)
carsRouter.post('/', CarsController.createCar)
carsRouter.delete('/:id', CarsController.deleteCar)
carsRouter.patch('/:id', CarsController.updateCar)

export default carsRouter
