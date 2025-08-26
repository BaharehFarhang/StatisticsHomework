import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import HomeworkView from './views/HomeworkView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/homework/:id', component: HomeworkView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
