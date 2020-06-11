import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flights: { }
  },
  getters: {
    getCities (state, getters) {

    },
    getPrices (state, getters) {

    },
    getFlights (state, getters) {

    }
  },
  actions: {
    fetchFlights (context, instance) {
      instance.axios.get('/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-09-01').then((data) => {
        context.commit('setFlights', data)
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  mutations: {
    setFlights (state, flights) {
      state.flights = flights
    }
  },
  modules: {
  }
})
