import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/views/Login";
import SaveMoney from "@/views/SaveMoney";
import WithdrawMoney from "@/views/WithdrawMoney";
import SaveMoneyNext from "@/views/SaveMoneyNext";
import Language from "@/views/Language";
import Cancellation from "@/views/Cancellation";
import Balance from "@/views/Balance";
import Agreement from "@/views/Agreement";
import Background from "@/components/particles/Background";
import Register from "@/views/Register";
import HistoryRecord from "@/views/HistoryRecord";
import SelectCard from "@/views/SelectCard";
import CardLogin from "@/views/CardLogin";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/agreement',
    name: 'Agreement',
    component: Agreement
  },
  {
    path: '/balance',
    name: 'Balance',
    component: Balance
  },
  {
    path: '/cancellation',
    name: 'Cancellation',
    component: Cancellation
  },
  {
    path: '/historyRecord',
    name: 'HistoryRecord',
    component: HistoryRecord
  },
  {
    path: '/language',
    name: 'Language',
    component: Language
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/saveMoney',
    name: 'SaveMoney',
    component: SaveMoney
  },
  {
    path: '/saveMoneyNext',
    name: 'SaveMoneyNext',
    component: SaveMoneyNext
  },
  {
    path: '/withdrawMoney',
    name: 'WithdrawMoney',
    component: WithdrawMoney
  },

  {
    path: '/background',
    name: 'Background',
    component: Background
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/selectCard',
    name: 'SelectCard',
    component: SelectCard
  },
  {
    path: '/cardLogin',
    name: 'CardLogin',
    component: CardLogin
  },

  {
    path: '/error',
    name: 'Error',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Error.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
