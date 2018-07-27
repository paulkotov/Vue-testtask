<template>
    <div>
        <h2>Task1: Калькулятор дробей</h2>
        <div class="main">
            <div class="fractions-container" >
                <div v-for="fraction of fractions" :key="fraction.id" style="display:flex;">
                    <fraction class="item" :ch="fraction.chis" :zn="fraction.znam"></fraction>
                    <operation class="item" op="+"></operation>
                </div> 
            </div>
            <span style="display:flex; align-items:center;">=</span>
            <fraction :ch="1" :zn="2"></fraction>
        </div>
        <button v-on:click="add">Добавить</button>
        <button v-on:click="remove" v-if="fractions.length > 2">Удалить</button>      
    </div>
</template>

<script>
import Fraction from '../components/Fraction';
import Operation from '../components/Operation';

export default {
  name: 'Task1',  
  components: { Fraction, Operation },
  data: () => ({ 
    fractions: [
        {
            id: 1,
            chis: 1,
            znam: 2
        }, {
            id: 2,
            chis: '',
            znam: ''
        }
    ],
    operations: [],
  }),
  computed: {
    //   $store.state
  },
  methods: {
    add() {
        this.fractions.push({
            id: this.fractions.length+1,
            chis: '',
            znam: ''
        });
        console.log('Added new');
    },
    remove() {
        if (this.fractions.length > 0) {
            this.fractions.pop();
            console.log('Removed last');
        }
    },
    calculate() {

    }
  }

}
</script>

<style>
 .fractions-container {
    display: flex;
    justify-content: flex-start;

 }
 .main{
    display: flex;
    justify-content: flex-start;
 }
</style>
