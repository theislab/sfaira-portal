import { createStore } from 'vuex'

import datasets from '../assets/datasets.json'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      datasets: datasets
    }
  }
})

export default store
