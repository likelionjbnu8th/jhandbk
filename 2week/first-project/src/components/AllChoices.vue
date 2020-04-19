<template>
    <div>
        <h3>all choices</h3>

        <div v-for="choice in choices" :key="choice.id">
            <!--v-for를 써줄 때는 :key값이 항상 요구된다.이때 담아지는 객체에 대해 id 값을 쓴다 생각하자-->
            <!-- <span>{{choice.name}}</span> -->
            <span @click="removeAChoice(choice.name)">{{choice.name}}</span>
        </div>

    </div>
</template>

<script>
    export default{
        props:['choices'],
        data(){
            return{

            }
        },
        methods:{
            removeAChoice(name){
                this.$emit('delete',{name})
            }
        }
        }
</script>

<style>

</style>