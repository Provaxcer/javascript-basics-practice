import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createStock = await prisma.stock.create({
    data: {
        symbol: "TCS",
        price: 3800
    }
})

const readStock = await prisma.stock.findUnique({
    where: { id: createStock.id }
})

const updateStock = await prisma.stock.update({
    where: { id: newStock.id },
    data: { price: 3950.00 }
})

const DeleteStock = await prisma.stock.delete({
    where: { id: newStock.id }
})