import Vue from 'vue'
import VueRouter from 'vue-router'

import Client from "../views/Client"
import Home from "../components/client/Home"
import ComparisonView from "../components/client/ComparisonView"
import ProductGroupList from "../components/client/ProductGroupList"
import ProductList from "../components/client/ProductList"
import BlogList from "../components/client/BlogList"
import Blog from "../components/client/Blog"
import AdviceList from "../components/client/AdviceList"

import Admin from "../views/Admin"
import Login from "../components/admin/utilities/Login"
import AdminHome from "../components/admin/AdminHome"
import AddProduct from "../components/admin/AddProduct"
import AddComparison from "../components/admin/AddComparison"
import AddBlog from "../components/admin/AddBlog"
import AddSlide from "../components/admin/AddSlide"

import login from "../store/modules/login"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Client,
    name:"Client",
    children:[
      {
        path:"/",
        component:Home,
        name:"Home"
      },
      {
        path:"/bloglist",
        component:BlogList,
        name:"BlogList",
      },
      {
        path:"bloglist/blog",
        component:Blog,
        name:"Blog",
      },
      {
        path:"/advice",
        component:AdviceList,
        name:"AdviceList",
      },
      {
        path:"/comparisonview",
        component:ComparisonView,
        name:"ComparisonView",
        props: true,
      },
      {
        path:"/productgrouplist",
        component:ProductGroupList,
        name:"ProductGroupList"
      },
      {
        path:"/productlist",
        component:ProductList,
        name:"ProductList"
      },
      
    ]
  },
  {
    path:"/admin",
    component:Admin,
    name:"Admin",
    children:[
      {
        path:"/",
        component:Login,
        name:"Login",
      },
      {
        path:"adminhome",
        component:AdminHome,
        name:"AdminHome",
        beforeEnter: (to, from, next) => {
          if(login.state.logged){
            next()
          }
        }
      },
      {
        path:"addproduct",
        component:AddProduct,
        name:"addProduct",
        beforeEnter: (to, from, next) => {
          if(login.state.logged){
            next()
          }
        }
      },
      {
        path:"addcomparison",
        component:AddComparison,
        name:"AddComparison",
        beforeEnter: (to, from, next) => {
          if(login.state.logged){
            next()
          }
        }
      },
      {
        path:"addblog",
        component:AddBlog,
        name:"AddBlog",
        beforeEnter: (to, from, next) => {
          if(login.state.logged){
            next()
          }
        }
      },
      {
        path:"addslide",
        component:AddSlide,
        name:"AddSlide",
        beforeEnter: (to, from, next) => {
          if(login.state.logged){
            next()
          }
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
