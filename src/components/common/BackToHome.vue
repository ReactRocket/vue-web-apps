<template lang="">
    <button v-if="$store.state.baseURL == '/'" @click="$router.push('/')">Back To Home</button>
</template>
<script>
export default {
    watch:{
        'this.$store.state.baseURL':{
            handler(val){
                console.log(val);
            }
        }
    }

}
</script>
<style scoped>
button{
    position: fixed;
    top: 10PX;
    left: 10px;
    padding: 7px;
    cursor: pointer;
    background-color: black;
    color: wheat;
    scale: 1;
    transition:scale 0.5s ease-in-out;
}

button:hover{
    scale: 1.02;
    background-color: wheat;
    color: black;
}
    
</style>