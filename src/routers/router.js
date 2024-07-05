import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import ReactionTimer from '@/components/games/ReactionTimer.vue'
import TodoApp from '@/components/apps/TodoApp.vue'

const routes = [
  { path: '/',name:'Home', component: Home },
  { path: '/games/reaction-time',name:'ReactionTimer', component: ReactionTimer },
  { path: '/apps/todo',name:'TodoApp', component: TodoApp },
]

export const router = createRouter({
  history: createWebHistory(window.URL.origin),
  routes,
})