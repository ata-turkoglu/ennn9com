import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../../firebase" 
import firebase from "firebase"
import login from "./modules/login"
import log from "./modules/log"

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    products:[],
    comparisons:[],
    filters:{
      categories:[],
    },
    filter1:null,
    filter2:null,
  },

  getters:{
    
    getProducts(state){
      if(state.filter1==null && state.filter2==null){
        return state.products
      }else if(state.filter1!=null && state.filter2==null){
        return state.products.filter(product=>product.category1==state.filter1)
      }else{
        return state.products.filter(product=>product.category1==state.filter1 && product.category2==state.filter2)
      }
    },

    getFilters(state){
      return state.filters
    },

    getComparisons(state){
      return state.comparisons
    }

  },

  mutations: {
    
    setProducts(state,list){
      state.products=list
    },

    setFilters(state,{categories}){
      state.filters.categories=categories
    },

    setFilter1(state,value){
      state.filter1=value
    },

    setFilter2(state,value){
      state.filter2=value
    },

    setComparisons(state,value){
      state.comparisons=[]
      let list = new Set(value.map(v=>v.category))
      list.forEach(item=>{
        let obj = new Object({
          title:item,
          contents:[]
        })
        obj.contents=value.filter(v=>v.category==item)
        state.comparisons.push(obj)
      })
    }

  },

  actions: {

    async getProducts({commit}){
      let list=[]
      await db.collection("products").orderBy("addedDate","desc").get()
      .then(snap=>{
        snap.forEach(doc=>{
          let obj = new Object({
            id:doc.id,
            ...doc.data()
          })
          list.push(obj)
        })
      })
      .then(()=>{
        commit("setProducts",list)
      })
    },


    async getCategories({commit}){
      let categories=[]
      db.collection("filters").doc("categories").get()
      .then(snap=>{
        let data = snap.data()
        Object.keys(data).forEach(key=>{
          let obj = new Object({
            "title":key,
            "sub":data[key]
          })
          categories.push(obj)
        })
      })
      commit("setFilters",{categories})
    },


    async saveProduct({commit,state},product){
      let key
      let imgUrls=[]
      await db.collection("products").add({
        brand:product.brand,
        model:product.model,
        origin:product.origin,
        category1:product.category1,
        category2:product.category2,
        category3:product.category3,
        link:product.link,
        videolink:product.videolink,
        specs:product.specs,
        differences:product.differences,
        addedDate: firebase.firestore.Timestamp.now().seconds,
      })
      .then(result=>{
        key=result.id
        return key
      })
      .then(async key=>{
        for(let i=0;i<product.images.length;i++){
          let filename=product.images[i].name
          let ext = filename.slice(filename.lastIndexOf("."))
          await firebase.storage().ref("productImages/"+key+"-"+i+ext).put(product.images[i])
          .then(data=>{
            return data.ref.getDownloadURL()
          })
          .then(url=>{
            imgUrls.push(url)
          })
        }
      })
      await db.collection("products").doc(key).update({
        imageURLs:imgUrls
      })
      .then(()=>{
        alert("Kaydetme Başarılı")
      })
      .catch(err=>{
        console.log(err)
        alert("Bir Hata Oluştu")
      })
    },

    async getComparisons({commit}){
      let list=[]
      await db.collection("comparisons").orderBy("addedDate","desc").get()
      .then(snap=>{
        snap.forEach(doc=>{
          let obj = new Object({
            id:doc.id,
            ...doc.data(),
            productlist:[],
          })
          doc.data().productlist.forEach(f=>{
            f.get()
            .then(res=>{
              obj.productlist.push(res.data())
            })
          })
          list.push(obj)
        })
        commit("setComparisons",list)
      })


      /*await db.collection("comparisons").doc("bebek").get()
      .then(snap=>{
        let d=snap.data()
        console.log(d)
      })*/
    },

    async saveComparison({commit},comp){
      let key
      let img
      await db.collection("comparisons").add({
        adj:comp.adj,
        name:comp.name,
        category:comp.category,
        text1:comp.text1,
        text2:comp.text2,
        text3:comp.text3,
        productlist:comp.productlist,
        addedDate: firebase.firestore.Timestamp.now().seconds,
      })
      .then(result=>{
        key=result.id
        return key
      })
      .then(async key=>{
        let filename=comp.image.name
        let ext = filename.slice(filename.lastIndexOf("."))
        await firebase.storage().ref("compimages/"+key+ext).put(comp.image)
        .then(data=>{
          return data.ref.getDownloadURL()
        })
        .then(url=>{
          img=url
        })
        
      })
      await db.collection("comparisons").doc(key).update({
        image:img
      })
      .then(()=>{
        alert("Kaydetme Başarılı")
      })
      .catch(err=>{
        console.log(err)
        alert("Bir Hata Oluştu")
      })
    },

    async saveSlide({commit}, slide){
      let key
      let img
      await db.collection("slides").add({
        addedDate: firebase.firestore.Timestamp.now().seconds,
        text:slide.text,
      })
      .then(result=>{
        key = result.id
        return key
      })
      .then(async key =>{
        let filename = slide.image.name
        let ext = filename.slice(filename.lastIndexOf("."))
        await firebase.storage().ref("slideImages/"+key+ext).put(slide.image)
        .then(data=>{
          return data.ref.getDownloadURL()
        })
        .then(url=>{
          img=url
        })
      })
      await db.collection("slides").doc(key).update({
        image:img,
        path:key
      })
      .then(()=>{
        alert("Kaydetme Başarılı")
      })
      .catch(err=>{
        console.log(err)
        alert("Bir Hata Oluştu")
      })
    },

  },

  modules: {
    login,
    log,
  }
})
