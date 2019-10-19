import Vue from 'vue'

export default {
    async requestAxios(promise, callback, errorCallback){
        try {
            const response =await promise
            if(callback){
                callback(response.data)
            }
        } catch (err) {
            if (errorCallback){
                errorCallback(err)
            }
        }
    }
}