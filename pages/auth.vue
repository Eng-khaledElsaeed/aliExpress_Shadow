<template>
    <div id="AuthPage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="assets/citystars-logo.png" alt="logo">
            </NuxtLink>
        </div>
        <div class="max-w-[400px] mx-auto px-2">
            <div class="text-center my-6">login / Register</div>
            <button
                @click="login('google')"
                class="
                mt-4
                flex
                items-center
                justify-center
                gap-3
                w-full
                border
                p-1.5
                hover:bg-gray-100
                rounded-full
                text-lg
                font-semibold
                " 
            >
            <img src="assets/google-logo.png" class="w-full max-w-[30px]" alt="">
            <div>Google</div>
            </button>

            <button
                @click="login('github')"
                class="
                mt-4
                flex
                items-center
                justify-center
                gap-3
                w-full
                border
                p-1.5
                hover:bg-gray-100
                rounded-full
                text-lg
                font-semibold
                " 
            >
            <img src="assets/github-logo.png" class="w-full max-w-[30px]" alt="">
            <div>github</div>
            </button>

        </div>
    </div>
</template>

<script setup>
const client=useSupabaseClient();
const user=useSupabaseUser();

watchEffect(()=>{
    console.log(user) //undefined when not logged in, otherwise contains the current supab
    if(user.value){
        return navigateTo('/')
    }
})

const login = async (prov) => {
  try {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: prov,
    });

    // Handle successful login, update UI, or perform other actions.
    // For example, you might want to set a state indicating that the user is logged in.
    // You can also navigate to a different page or refresh the current page.
  } catch (error) {
    // Handle any errors that might occur during the login process.
    console.error('Error during login:', error);
    // You can show an error message to the user or take appropriate actions.
  }
};

</script>
