<template>
    <div class="operation">
        <input type="text" size="1" v-model="operation" autofocus @change="checkInput"/>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('operation', {
    props: {
        op: {
            type: String
        }
    },
    data(){
       return {
           errors: [],
           operation: ''
       }
    },
    methods: {
        checkInput(e){
          const opsList = ['+', '-', '*', '/']

            // console.log(this.operation);
            // if (this.operation !== '+' || '-' || '*' || '/'){
            //     this.errors.push("Incorrect");
            // }
            // if (this.errors.length !==0){
            //     e.target.value ='';
            // }
            console.log(this.operation);
            e.preventDefault();

        }
    }
});
</script>

<style scoped>
.operation{
    width: 65px;
    margin: 10px;
    display: flex;
    align-items: center;
}

.operation > input{
    text-align: center;
    font-size: 20px
}

</style>
