<template>
    <div class="chat">
        <textarea :value="this.ch" placeholder="Type your message" @change="checkInput" autofocus />
        <div>
            <button >Send</button>       
        </div>
    </div>  
</template>

<script>
import Vue from 'vue';

export default Vue.component('chat', {
    props: {},
    data(){
       return {} 
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
.chat>textarea {
    width: 500px;
    height: 100px;
}

.chat {
    position: absolute;
    bottom: 0px;
    background-color: blanchedalmond;    
}
</style>
