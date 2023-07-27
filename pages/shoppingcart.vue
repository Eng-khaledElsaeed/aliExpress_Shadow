<template>
    <MainLayout>
        <!-- your content here -->
        <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div v-if="!userStore.cart.length" class="h-[500px] flex items-center justify-center">
                <div class="pt-20">
                    <img src="/assets/empty-cart-2.png" class="mx-auto" width="250" alt="">
                    <div class="text-xl text-center mt-4">no items yet!</div>
                    <div v-if="!user" class="flex text-center">
                        <NuxtLink 
                            to="/auth"
                            class="
                                bg-[#fd374f]
                                w-full
                                text-white
                                text-[21px]
                                font-semibold
                                p-1.5
                                mt-4
                                rounded-full
                            "
                        >
                            sign in
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[60%]">
                    <div class="bg-white rounded-lg p-4 ">
                        <div class="text-2xl font-bold mb-2">
                            Shopping Cart ({{ userStore.cart.length }})
                        </div>
                    </div>
                    <div class="bg-[#feeeef] rounded-lg p-4 mt-4">
                        <div class="text-red-500 font-bold">Welcome Deal Application on 1 item only</div>
                    </div>
                    <div id="Items" class="bg-white rounded-lg p-4 mt-4">
                        <div v-for="product in userStore.cart" :key="product">
                            <CartItem   
                                :product="product"
                                :selectedArray="selectedArray"
                                @selectedRadio="selectedRadioFunc"
                            />
                        </div>
                    </div>
                </div>
                <div class="md:hidden block my-4"></div>
                <div class="md:w-[35%]">
                    <div id="summary" class="bg-white rounded-lg p-4">
                        <div class="text-2xl font-extrabold mb-2">summary</div>
                        <div class="flex items-center justify-between my-4">
                            <div class="font-semibold">Total</div>
                            <div class="text-2xl font-semibold">
                                $ <span class="font-Extrabold">{{ totalPriceCompute }}</span>
                            </div>
                        </div>
                        <button
                            @click="goToChekout"
                            class="
                            flex
                            items-center
                            justify-center
                            bg-[#fd374f]
                            w-full
                            text-white
                            text-[21px]
                            font-semibold
                            p-1.5
                            rounded-full
                            mt-4
                            " 
                        >
                        checkout
                        </button>
                    </div>
                    <div id="paymentProtection" class="bg-white rounded-lg mt-4 p-1.5">
                        <div class="text-lg font-semibold mb-2">Payment Methots</div>
                        <div class="flex items-center justify-start gap-8 my-4">
                            <div v-for="card in cards" :key="card">
                                <img class="h-6" :src="card" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </MainLayout>

</template>

<script setup>
import MainLayout from '/layouts/MainLayout.vue';
import { useUserStore } from '/stores/user';

const userStore=useUserStore();

const user =useSupabaseUser();

let selectedArray = ref([])

onMounted(()=>{
    setTimeout(() => {
        userStore.isLoading=false;
    }, 200);
})

const cards=ref([
    '/assets/visa.png',
   '/assets/mastercard.png',
   ' /assets/paypal.png',
    '/assets/applepay.png',
])

const totalPriceCompute=computed(()=>{
    let price=0
    userStore.cart.forEach(prod => {
        price+=prod.price
    });
    return price/100;
})

const selectedRadioFunc=(e)=>{
    if(!selectedArray.value.length){
        selectedArray.value.push(e)
        return 
    }

    selectedArray.value.forEach((item,index) => {
        if(e.id!=item.id){
            selectedArray.value.push(e)
        }else{
            selectedArray.value.splice(index,1)
        }
    });
}

const goToChekout=()=>{
    let ids=[];
    userStore.checkout=[];
    selectedArray.value.forEach(item=>{
        ids.push(item.id);
    });

    let res=userStore.cart.filter((item)=>{
        return ids.indexOf(item.id) != -1
    });
    
    res.forEach(item=> userStore.checkout.push(toRaw(item)))

    return navigateTo('/checkout')
}

</script>

