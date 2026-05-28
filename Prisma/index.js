import express from 'express'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const app = express()

// use the direct postgres URL, not the prisma+postgres one
const adapter = new PrismaPg({ connectionString: process.env.DIRECT_URL })
const prisma = new PrismaClient({ adapter })

app.use(express.json())

// GET all stocks
app.get('/stocks', async (req, res) => {
  try {
    const stocks = await prisma.stock.findMany()
    res.json(stocks)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

// GET one stock by id
app.get('/stocks/:id', async (req, res) => {
  try {
    const stock = await prisma.stock.findUnique({
      where: { id: Number(req.params.id) }
    })
    res.json(stock)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

// POST — add a new stock
app.post('/stocks', async (req, res) => {
  try {
    const { symbol, price } = req.body
    const newStock = await prisma.stock.create({
      data: { symbol, price }
    })
    res.json(newStock)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

// PUT — update a stock's price
app.put('/stocks/:id', async (req, res) => {
  try {
    const { price } = req.body
    const updated = await prisma.stock.update({
      where: { id: Number(req.params.id) },
      data: { price }
    })
    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

// DELETE — remove a stock
app.delete('/stocks/:id', async (req, res) => {
  try {
    await prisma.stock.delete({
      where: { id: Number(req.params.id) }
    })
    res.json({ message: 'Stock deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

app.listen(3000, () => console.log('Server running on port 3000'))