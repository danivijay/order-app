import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)

let itemsJson = JSON.parse('[{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Egg Chinese Combo","price":100,"vegflag":"nonveg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"Chilli Garlic Chicken, Vegetable Fried Rice/ Noodles, Hong Kong Sauce","name":"Chicken Chinese Combo","price":110,"vegflag":"nonveg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Lebanese Falafal Pockets","price":120,"vegflag":"veg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"","name":"Lebanese Chicken Pockets","price":150,"vegflag":"nonveg"},{"availabletime":"00:00-23:59","category":"Chinese Starter","description":"","name":"Mexican Veg Nachos","price":120,"vegflag":"veg"},{"availabletime":"00:00-23:59","category":"Chinese Starter","description":"","name":"Mexican Non Veg Nachos","price":150,"vegflag":"nonveg"},{"availabletime":"00:00-23:59","category":"Chinese Starter","description":"","name":"Indonesian  Nasi Goreng Tofu","price":120,"vegflag":"veg"},{"availabletime":"00:00-23:59","category":"Chinese Starter","description":"","name":"Indonesian Nasi Goreng Chicken","price":150,"vegflag":"nonveg"},{"availabletime":"12:00-16:00","category":"Salads","description":"","name":"Veg Salad","price":80,"vegflag":"veg"},{"availabletime":"12:00-16:00","category":"Salads","description":"","name":"Non Veg Salad","price":100,"vegflag":"nonveg"},{"availabletime":"10:00-20:00","category":"Oriental","description":"Chilli Garlic Chicken","name":"Chicken Starter","price":75,"vegflag":"nonveg"},{"availabletime":"10:00-20:00","category":"Oriental","description":"Chilli Garlic Potatoes","name":"Veg Starter","price":55,"vegflag":"veg"},{"availabletime":"10:00-20:00","category":"Oriental","description":"","name":"Paneer Starter","price":65,"vegflag":"veg"},{"availabletime":"11:00-15:30","category":"Chinese Combos","description":"Chilli Garlic Potatoes, Vegetable Fried Rice/ Noodles, Hong Kong Sauce","name":"Veg Chinese Combo","price":80,"vegflag":"veg"}]')

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    items: [],
    added: []
  },
  mutations: {
    initItems (state, payload) {
      let check = ''
      // TODO: Validation
      state.items = payload
      state.added = []
    },
    addAdded (state, payload) {
      //console.log(payload)
      let isInArray = []
      if (state.added.length > 0) {
        isInArray = state.added.filter(x => x.name == payload.name)
      }
      if (isInArray.length > 0) {
        let index = state.added.findIndex(x => x.name === payload.name)
        let val = state.added[index].value
        val += payload.value
        if(val >= 0)
          state.added[index].value = val
      } else {
        state.added.push(payload)
      }
    }
  },
  actions: {
    initItems ({commit, getters}) {
      return axios.get('https://thesmartq.firebaseio.com/menu.json')
        .then((response) => {
          commit('initItems', response.data)
        })
        .catch(function (error) {
          throw error
        })
    },
    addAdded ({commit, getters}, payload) {
      commit('addAdded', payload)
    }
  },
  getters: {
    getItems (state) {
      return state.items
    },
    getAdded (state) {
      return state.added
    }
  }
})
