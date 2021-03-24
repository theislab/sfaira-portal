import { createStore } from 'vuex'

import datasets from '../assets/datasets.json'

function getUniqueValues(itemsList, field) {
  let allValues = []

  itemsList.forEach(function (item) {
    let itemValue = item[field]
    if (itemValue !== undefined) {
      if (itemValue instanceof Array) {
        // Remove any missing values https://stackoverflow.com/a/281335/4384120
        itemValue = itemValue.filter(Boolean)
        allValues = allValues.concat(itemValue)
      } else {
        allValues.push(itemValue)
      }
    }
  })
  let uniqueValues = [...new Set(allValues)]

  return uniqueValues.sort()
}

function filterItemsList(itemsList, field, values) {
  if (values.length === 0) {
    return itemsList
  } else {
    return itemsList.filter((item) => includesOne(item[field], values))
  }
}

function includesOne(item, values) {
  if (item instanceof Array) {
    return values.some(value => item.includes(value))
  } else {
    return values.includes(item)
  }
}

const store = createStore({
  state() {
    return {
      datasets: datasets,
      datasetsFilters: {}
    }
  },

  getters: {
    displayDatasets: (state) => {
      let displayDatasets = JSON.parse(JSON.stringify(state.datasets))

      for (const field in state.datasetsFilters) {
        displayDatasets = filterItemsList(displayDatasets, field, state.datasetsFilters[field])
      }

      // if (state.sortBy && 0 !== state.sortBy.length) {
      //   filteredCardItems.sort(cardSorter(state.sortBy))
      // }

      return displayDatasets
    },

    datasetFieldUnique: (state) => (field) => {
      return getUniqueValues(state.datasets, field)
    }
  },

  mutations: {
    setDatasetsFilter(state, payload) {
      state.datasetsFilters[payload.field] = payload.values
    }
  }
})

export default store
