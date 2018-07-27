<template>
    <div>
        <p>{{text}}</p>
    </div>
</template>
<script>
import Vue from "vue";

export default Vue.component('messages', {
    props: ['messages'],
    data(){
        return{

        }
    }
})
</script>
<style>

</style>
