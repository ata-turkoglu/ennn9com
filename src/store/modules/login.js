import axios from "axios"
import router from "../../router/router"
const state = {

    API:process.env.VUE_APP_API_KEY,
    token:"",
    logged:false,

}

const getters = {

    getLog(state){
        return state.logged
    },

}

const mutations = {

    logged(state,value){
        state.logged=value
    },

    setToken(state,token){
        state.token=token
    },

}

const actions = {

    initLog({commit,dispatch,state}){
        let token = localStorage.getItem("token")
        if(token){
            let expirationDate = localStorage.getItem("expirationDate")
            let time = new Date().getTime()

            if(time >= +expirationDate){
                dispatch("logout")
            }else{
                let timeleft = +expirationDate-time
                commit("setToken",token)
                dispatch("setTimeoutTimer",timeleft)
                state.logged=true
            }
        }else{
            state.logged=false
        }
    },

    login({commit,dispatch,state},user){
        let post_link="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
        if(user.newUser){
            post_link="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
        }
        axios.post(post_link+state.API,
            {
                email:user.email,
                password:user.password,
                returnSecureToken:true
            }).then(response=>{
                console.log("response",response)
                commit("logged",true)
                commit("setToken",response.data.idToken)
                localStorage.setItem("token",response.data.idToken)
                localStorage.setItem("expirationDate", (new Date().getTime()+(+response.data.expiresIn*1000)))
                dispatch("setTimeoutTimer",+response.data.expiresIn*1000)
                router.push("/admin/adminhome")
            })
            .catch(error=>{
                console.log(error)
                console.log(error.response.data.error.message)
            })
    },

    logout({commit}){
        commit("logged",false)
        localStorage.removeItem("token")
    },

    setTimeoutTimer({dispatch},expiresIn){
        setTimeout(()=>{
            dispatch("logout")
        },expiresIn)
    },

}

export default {
    state,
    getters,
    mutations,
    actions
}