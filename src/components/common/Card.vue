<template>
    <div @click="this.$emit('goToGame', data.link)" class="card">
        <h3>{{data.title}}</h3>
    </div>
</template>
<script>
export default {
    props:{
        data: Object
    },
    emit:['goToGame']
    
}
</script>
<style scoped>
.card{
    height: 150px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid gray;
    border-radius: 5px;
    scale: 1;
    transition: scale .5s ease-in-out;
}

.card:hover{
    cursor: pointer;
    scale: 1.03;
}
</style>