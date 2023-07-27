import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// const prisma = new PrismaClient({
//     log: ['query', 'info', 'warn', 'error'],
//   });

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    const res = await prisma.addresses.create({
        data: {
            userId: body.userId,
            name: body.name,
            address: body.address,
            zipcode: body.zipcode,
            city: body.city,
            country: body.country,
        }
    })

    return res
})