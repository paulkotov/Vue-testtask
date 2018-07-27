import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Task1 from '../pages/Task1';
import Task2 from '../pages/Task2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/task1',
      name: 'Task1',
      component: Task1
    },
    {
      path: '/task2',
      name: 'Task2',
      component: Task2
    }
  ]
})
