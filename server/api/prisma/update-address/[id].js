import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const prisma = new PrismaClient({
//     log: ['query', 'info', 'warn', 'error'],
//   });

export default defineEventHandler(async (event)=>{
    const body=await readBody(event);
    const res=await prisma.addresses.update({
        where: {
            id: Number(event.context.params.id),
        },
        data:{
            name:body.name,
           address:body.address,
           zipcode:body.zipcode,
           city:body.city,
           country:body.country,
        }
    })

//     // Update one Address
// const address = await prisma.address.update({
//     where: {
//       // ... provide filter here
//     },
//     data: {
//       // ... provide data here
//     }
//   })
  
  
})