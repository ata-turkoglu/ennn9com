import { db } from "../../../firebase" 
import firebase from "firebase"


const state = {
    idList : [],
}

const getters = {
    getIdList(state){
        return state.idList
    }
}

const mutations = {
    
    setIdList(state,list){
        state.idList=list
    },

}

const actions = {

    async getLog({commit,state}){
        let list=[]
        await db.collection("log").orderBy("date","desc").get()
        .then(snap=>{
            snap.forEach(doc=>{
                list.push(doc.id)
            })
        })
        .then(()=>{
            commit("setIdList",list)
        })
    },

    async setLog({commit,state},pass){
        if(pass.new){
            console.log(pass)
            await db.collection("log").doc(String(pass.blapg)).set({
                date: firebase.firestore.FieldValue.arrayUnion(firebase.firestore.Timestamp.now())
            })
        }else{
            await db.collection("log").doc(pass.blapg).update({
                date: firebase.firestore.FieldValue.arrayUnion(firebase.firestore.Timestamp.now())
            })
        }
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}