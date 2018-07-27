import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        fractions:[],
        operations: [],
        comments: []
    },
    mutations: {
        setFraction(state, payload){
            state.fractions.push(payload);
        },
        setOperation(state, payload){
            state.operations.push(payload);
        }
    },
    actions: {
        fetchComments({ commit }) {
            axios.get(url).then(response => {
                 commit('SET_COMMENTS', response.data);
            }).catch(error => {
                if (error.response.status === 403) {
                    vm.redirectLogin();
                }
            })
        }
    }

});

export default store;

// const store = Vuex.Store({
//     state: {
//         result: 0,
//         comments: []
//     },
//     mutations: {
//         set(state, { type, }){

//         }
//     },
//     actions: {
//         count({ commit }, ) {

//         }
//     }
// });
