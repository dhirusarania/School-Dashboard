// import Vuex from 'vuex';
// import Vue from 'vue';

// Vue.use(Vuex);


// const createStore = () => {
//     return new Vuex.Store({
//         state: {
//             registrations: [],
//             users : 0
//         },
//         getters:{

//             getCurrentUser(state){
//                 return state.users
//             }
//         },
//         mutations:{
//             saveCurrentLoggedInUser(state, exercise){
//                 console.log('selecting exercise mutation, ' + exercise)
//                 state.users = exercise
//               }
//         },
//         actions:{
//             saveCurrentLoggedInUser(context, exercise){
//                 console.log('selecting exercise action, ' + exercise)
//                 context.commit('saveCurrentLoggedInUser', exercise);
//               }
//         }
//     });
//   };

//   export default createStore


import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const state = () => ({

    all_customers: []

})


export const mutations = {
    all_admins(state, all_admins) {
        console.log('selecting exercise mutation, ' + all_admins)
        state.all_admins = all_admins
    },

}


export const getters = {
    get_selectedUserMessage(state) { 
        return state.selectedUserMessage 
    },
    get_MessageByCustomerName(state) { 
        return state.getMessageByCustomerName 
    }
 }



export const actions = {


    // addFinance({ commit, state }, payload) {

    //     return new Promise((resolve, reject) => {



    //         var bodyFormData = new FormData()

    //         console.log(payload)

    //         bodyFormData.append('transaction_date', payload.financeDate)
    //         bodyFormData.append('customer_id', payload.financeCustomerID)
    //         bodyFormData.append('parcel_id', payload.ParcelType)
    //         bodyFormData.append('finance_type', payload.finance_type)
    //         bodyFormData.append('amount', payload.amount)
    //         bodyFormData.append('weight', payload.financeAmount)
    //         bodyFormData.append('note', payload.financeNote)
    //         bodyFormData.append('moov', payload.amount)

    //         axios({
    //             method: 'POST',
    //             url: state.api.addFinance,
    //             data: bodyFormData,
    //             contentType: 'application/json',
    //             headers: {
    //                 'Authorization': "bearer " + this.$cookies.get('access_token')
    //             }
    //         })
    //             .then(res => {
    //                 console.log('response')
    //                 console.log(res)
    //                 resolve(res)
    //             })
    //             .catch(err => {
    //                 console.log('error in request', err)
    //             })


    //     })
    // },






}

