import {pool} from '../config/database.js'

const getCars = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM cars ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getCarById = async (req, res) => {
  try {
    const id = req.params.id
    const selectQuery = `SELECT name, price, exterior, roof, wheels, interior FROM cars WHERE id = ${id}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const createCar = async (req, res) => {
  try {
    const { name, price, exterior, roof, wheels, interior } = req.body 
    const results = await pool.query(`
      INSERT INTO cars ( name, price, exterior, roof, wheels, interior )
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [name, price, exterior, roof, wheels, interior ]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const updateCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, price, exterior, roof, wheels, interior } = req.body 
    const results = await pool.query(`
      UPDATE cars SET name = $1, price = $2, exterior = $3, roof = $4, wheels = $5, interior = $6 WHERE id = $7`,
      [name, price, exterior, roof, wheels, interior, id]
    )
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const deleteCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM cars WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
}