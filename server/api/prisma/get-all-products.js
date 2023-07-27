import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const prisma = new PrismaClient({
//     log: ['query', 'info', 'warn', 'error'],
//   });

export default defineEventHandler(async (event)=>{
    let products=await prisma.products.findMany();
    return products;
})