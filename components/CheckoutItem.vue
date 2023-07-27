<template>
    <div class="flex justify-start my-2">
    
        <img class="rounded-md md:w-[150px] w-[90px]" :src="product.url" alt="product">
        <div class="overflow-hidden pl-2">
            <div class="flex items-center ">
            <span class=" bg-[#fd374f] text-white text-[9px] p-0.5 font-semibold rounded-md">Welcome Deal</span>
            <div class="truncate pl-2">{{ product.title }}</div>
        </div>
        <div class="text-lg font-semibold mt-2">
            <!--{{ product.price.currencySign }}-->$<span class="font-bold">{{ product.price/100 }}</span>
        </div>
        </div>
        
     
    </div>

</template>

<script setup>
const props=defineProps(['product'])
const {product}=toRefs(props);

</script>   