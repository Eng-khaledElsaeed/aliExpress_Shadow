import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const prisma = new PrismaClient({
//     log: ['query', 'info', 'warn', 'error'],
//   });

export default defineEventHandler( async (event)=>{
    let product=await prisma.products.findFirst({
        where: {
            id:Number(event.context.params.id),
        }
    })
    return product;
})