import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const prisma = new PrismaClient({
//     log: ['query', 'info', 'warn', 'error'],
//   });

export default defineEventHandler(async (event)=>{
    const orders= await prisma.orders.findMany({
        where: {
            userId:event.context.params.userId
        },
        orderBy:{id:"desc"},
        include:{
            orderItems:{
                include:{
                    product:true,
                }
            }
        }
        
    });
    return orders;
})