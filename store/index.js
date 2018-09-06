import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      predictions: []
    },

    mutations: {
      setPredictions: (state, value) => state.predictions = value
    }
  })
}

export default store
