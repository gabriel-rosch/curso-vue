import Vue from 'vue';
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-36487.firebaseio.com/'

Vue.use({
    install(Vue) {
        //$http tem todos os methods do axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-36487.firebaseio.com/'
        })

        //interceptando requisições
        Vue.prototype.$http.interceptors.request.use(config => {
            // if(config.method === 'post') {
            //     config.method = 'put'
            // }
            return config
        })
    }
})