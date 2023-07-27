import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const prisma = new PrismaClient({
//     log: ['query', 'info', 'warn', 'error'],
//   });

export default defineEventHandler(async (event)=>{
    let items=await prisma.products.findMany({
        take:5,
        where: {
            title: {
                contains:event.context.params.id,
                mode:'insensitive'
            },
        },
    })
    return items;
})