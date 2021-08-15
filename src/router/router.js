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
import AdminHome from "../components/admin/AdminHome"
import AddProduct from "../components/admin/AddProduct"
import AddComparison from "../components/admin/AddComparison"
import AddBlog from "../components/admin/AddBlog"

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
        path:"/blog",
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
        component:AdminHome,
        name:"AdminHome"
      },
      {
        path:"addproduct",
        component:AddProduct,
        name:"addProduct"
      },
      {
        path:"addcomparison",
        component:AddComparison,
        name:"AddComparison"
      },
      {
        path:"addblog",
        component:AddBlog,
        name:"AddBlog"
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
