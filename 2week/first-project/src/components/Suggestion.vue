<template>
    <div>
        <h3>추천맛집</h3>
        <div v-for="choice in choices" :key="choice.id">
            <span v-if='choice.selected==true'>{{choice.name}} </span>
        </div>
    </div>
</template>

<script>
    export default{
        props:['choices'],
        data(){
            return{

            }
        }
        }

</script>

<style>

</style>