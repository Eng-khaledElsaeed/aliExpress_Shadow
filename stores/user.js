// stores/user.js
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
 state:()=> ({
    isMenuOverly:false,
    isLoading:false,
    cart:[],
    checkout:[]
 }),
 persist:true,
})
