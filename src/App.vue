<template>
  <div>
    <div id="container">
      <div class="menu">
        <router-link class="item" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="item" to="/task1">Task 1</router-link>
        <router-link class="item" to="/task2">Task 2</router-link>
      </div>
    </div>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {}
  }
}
</script>

<style>
  h2 {
    font-family: Verdana, Geneva, Tahoma;
  }
  .menu {
    background-color: rgb(235, 242, 255);
    font-family: Verdana, Geneva, Tahoma;
    font-size: 20px;
    padding: 10px;
  }
  .menu>.item {
    text-decoration: none;
    padding: 5px;
  }
 .menu>.item:hover{
   background-color: rgb(255, 254, 203);
   padding: 5px;
 }

</style>
