import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createStock = await prisma.stock.create({
    data: {

        symbol: "TCS",
        price: 3800
    }
})

const readStock = await prisma.stock.findMany({
    where: {
        symbol: "TCS"
    }
})

const updateStock = await prisma.stock.update({
    where: {
        symbol: "TCS"
    },
    data: {
        price: 3950
    }
})

const DeleteStock = await prisma.stock.delete({
    where: {
        symbol: "TCS"
    }
})