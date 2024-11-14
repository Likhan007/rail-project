<script setup>
import {ref} from 'vue'
import axios from 'axios'

const joke = ref(null);

const fetchjoke = async ()=>{

    try{
        const response = await axios.get('https://icanhazdadjoke.com/',{
            headers: {Accept: 'application/json'}
        })

        joke.value=response.data.joke
        console.log(joke.value)
    }catch(error){
        console.error("Failed to fetch the Dad Jokes")
    }


}

fetchjoke()

</script>

<template>
    <div class="joke-container">
        <h1>{{ joke }}</h1>
    </div>
    <button @click="fetchjoke">Fire a joke</button>

</template>


<style scoped>
</style>