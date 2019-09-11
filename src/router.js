import Vue from 'vue'
import Router from 'vue-router'
import Task from './views/task.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'task',
      component: Task
    }
  ]
})
