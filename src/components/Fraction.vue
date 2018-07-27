<template>
    <div class="fraction">
        <input type="number" size="1" :value="this.ch" @change="checkInput" autofocus />       
        <hr/>
        <input type="number" size="1" :value="this.zn" @change="checkInput" autofocus />  
    </div>  
</template>

<script>
import Vue from 'vue';

export default Vue.component('fraction', {
    props: {
        ch: {
            type: Number
        },
        zn: {
            type: Number
        }
    },
    data(){
       return {
        chis: '',
        znam: '',   
        errors: []
       } 
    },
    methods: {
        checkInput(e){
            console.log(e.target.value);
            e.preventDefault();

        }
    }
});
</script>

<style scoped>
.fraction{
    width: 65px;
    margin: 10px;
}

.fraction > input{
    text-align: center;
    font-size: 20px;
    width: 75px;
}
</style>
