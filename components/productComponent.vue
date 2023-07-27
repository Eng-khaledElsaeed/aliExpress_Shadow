<template>
    <div
       :id="`ProductComponent${product.id}`"
       class="bg-white inline-block rounded hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] cursor-pointer"
    >
        <NuxtLink :to="`/item/${product.id}`">
            <img class="rounded-t" :src="product.url" alt="">
            <div class="ProductDetails">
                <span class="flex items-center justify-start gap-3 px-1 pt-1">
                    <span class="text-[#FF6674] font-semibold"><!--{{ product.price.currencySign }}-->$ {{ priceCompute }}</span>
                    <span class="text-gray-500 text-sm text-light line-through"><!--{{ product.price.currencySign }}-->$ {{ oldPriceCompute }}</span>
                </span>
                <span class="px-1 relative -top-1.5 text-[#FF6674] text-xs font-semibold">
                    Extra 5% off
                </span>
                <div class="flex items-center gap-1 px-1 relative -top-1">
                    <div><span class="bg-[#fd374f] text-white text-[9px] font-semibold px-1.5 rounded-sm">Welcome Deal</span></div>
                    <div v-if="product.TopSelling"><span class="bg-[#f5f5f5] border text-[#c08562] text-[9px] font-semibold px-1.5 rounded-sm">Top Selling</span></div>
                </div>
                <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
                    5,000+ sold <Icon name="material-symbols:star-rate" color="#757575" class="ml-1.5" /> 4.5<!--{{ product.ratingAverage }}-->
                </p>
                <p class="px-1 pt-0.5 text-xs text-[#252525]">
                    {{ product.title.substring(0,60) }}
                </p>
                <p class="px-1 pb-1" v-if="product.isFreeShipping">
                    <!-- <span class="text-[#009a66] text-xs font-semibold">Free shipping</span> -->
                </p>
            </div>
        </NuxtLink>
    </div>
</template>
<script setup>
const props=defineProps(['product']);
const {product}=toRefs(props);


const priceCompute=computed(()=>{
    return product.value.price/100;
});

const oldPriceCompute=computed(()=>{
    let res=(product.value.price+(product.value.price/20))/100;
    return res.toFixed(2);
});

</script>