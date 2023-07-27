<template>
<MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
        <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            <!-- content -->
            <div v-if="products" v-for="product in products.data" :key="product">
                <productComponent :product="product"/>
            </div>
        </div> 
    </div>
</MainLayout>

</template>

<script setup>
import MainLayout from '/layouts/MainLayout.vue';
import { useUserStore } from '/stores/user';
const userStore=useUserStore();
let products=ref(null)

onBeforeMount(async () =>{
    products.value =await useFetch(`/api/prisma/get-all-products`);
    setTimeout(()=>{userStore.isLoading=false;},1000)
})
// const products=[
//     {id:0,title:'Product-0',description:"this is the product description",url:"https://picsum.photos/id/7/800/800",price:{currencyCode:"USD",currencySign:"$",amount:987},discount:{discount:true,discountAmount:20},TopSelling:true,ratingAverage:4.5,isFreeShipping:true,},
//     {id:1,title:'Product-1',description:"this is the product description",url:"https://picsum.photos/id/71/800/800",price:{currencyCode:"USD",currencySign:"$",amount:987},discount:{discount:true,discountAmount:20},TopSelling:true,ratingAverage:4.6,isFreeShipping:false,},
//     {id:2,title:'Product-2',description:"this is the product description",url:"https://picsum.photos/id/72/800/800",price:{currencyCode:"USD",currencySign:"$",amount:987},discount:{discount:true,discountAmount:20},TopSelling:false,ratingAverage:3.7,isFreeShipping:true,},
//     {id:3,title:'Product-3',description:"this is the product description",url:"https://picsum.photos/id/73/800/800",price:{currencyCode:"USD",currencySign:"$",amount:100},discount:{discount:true,discountAmount:20},TopSelling:true,ratingAverage:4.7,isFreeShipping:false,},
//     {id:4,title:'Product-4',description:"this is the product description",url:"https://picsum.photos/id/74/800/800",price:{currencyCode:"USD",currencySign:"$",amount:900},discount:{discount:false,discountAmount:0},TopSelling:false,ratingAverage:4.2,isFreeShipping:true,},
//     {id:5,title:'Product-5',description:"this is the product description",url:"https://picsum.photos/id/75/800/800",price:{currencyCode:"USD",currencySign:"$",amount:300},discount:{discount:true,discountAmount:20},TopSelling:true,ratingAverage:4.5,isFreeShipping:false,},
//     {id:6,title:'Product-6',description:"this is the product description",url:"https://picsum.photos/id/76/800/800",price:{currencyCode:"USD",currencySign:"$",amount:400},discount:{discount:false,discountAmount:0},TopSelling:false,ratingAverage:4.0,isFreeShipping:true,},
//     {id:7,title:'Product-7',description:"this is the product description",url:"https://picsum.photos/id/77/800/800",price:{currencyCode:"USD",currencySign:"$",amount:987},discount:{discount:true,discountAmount:20},TopSelling:true,ratingAverage:4.9,isFreeShipping:false,},
//     {id:9,title:'Product-8',description:"this is the product description",url:"https://picsum.photos/id/78/800/800",price:{currencyCode:"USD",currencySign:"$",amount:977},discount:{discount:false,discountAmount:0},TopSelling:false,ratingAverage:4.1,isFreeShipping:true,},
//     {id:8,title:'Product-9',description:"this is the product description",url:"https://picsum.photos/id/79/800/800",price:{currencyCode:"USD",currencySign:"$",amount:987},discount:{discount:true,discountAmount:20},TopSelling:true,ratingAverage:4.5,isFreeShipping:false,},
//     {id:10,title:'Product-10',description:"this is the product description",url:"https://picsum.photos/id/80/800/800",price:{currencyCode:"USD",currencySign:"$",amount:1300},discount:{discount:false,discountAmount:0},TopSelling:true,ratingAverage:4.4,isFreeShipping:true,},
//     {id:11,title:'Product-11',description:"this is the product description",url:"https://picsum.photos/id/81/800/800",price:{currencyCode:"USD",currencySign:"$",amount:987},discount:{discount:true,discountAmount:20},TopSelling:false,ratingAverage:4.6,isFreeShipping:true,},
//     {id:12,title:'Product-12',description:"this is the product description",url:"https://picsum.photos/id/82/800/800",price:{currencyCode:"USD",currencySign:"$",amount:1200},discount:{discount:true,discountAmount:20},TopSelling:true,ratingAverage:4.8,isFreeShipping:false,},
//     {id:13,title:'Product-13',description:"this is the product description",url:"https://picsum.photos/id/83/800/800",price:{currencyCode:"USD",currencySign:"$",amount:987},discount:{discount:false,discountAmount:0},TopSelling:true,ratingAverage:4.5,isFreeShipping:true,},
//     {id:14,title:'Product-14',description:"this is the product description",url:"https://picsum.photos/id/84/800/800",price:{currencyCode:"USD",currencySign:"$",amount:620},discount:{discount:true,discountAmount:20},TopSelling:false,ratingAverage:4.8,isFreeShipping:false,},
//     {id:15,title:'Product-15',description:"this is the product description",url:"https://picsum.photos/id/85/800/800",price:{currencyCode:"USD",currencySign:"$",amount:987},discount:{discount:true,discountAmount:20},TopSelling:true,ratingAverage:4.9,isFreeShipping:true,},
// ]
// const products={
//     title:'Product',
//     price:{
//         currencyCode:"USD",
//         amount:987,
//         decimals: 2
//     },
//     imageURLs:[""],
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     ratingAverage:4.5,
//     reviewCount:10,
//     categorytitle:"Category title Here",
//     brandtitle:"Brand title here",
//     sku:"SKU_HERE",
//     isFreeShipping:true,
//     createdAt:"Date Created HERE",
//     updatedAt:"Last Updated Date HERE",
//     attributes:{},
//     variations:{},
//     relatedProducts:{},
//     upSells:{},
//     crossSells:{},
//     inventoryStatus:{},
//     availability:{},
//     shippingMethods:{},
//     reviews:{},
//     tags:{},
//     wishlistId:{},
//     cartItemId:{},
//     orderItems:{},
//     vendor:{},
//     seller:{},
//     taxClass:{},
//     categories:{}
// }

</script>