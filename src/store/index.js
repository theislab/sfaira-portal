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

  const uniqueValues = [...new Set(allValues)]

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
    return values.some((value) => item.includes(value))
  } else {
    return values.includes(item)
  }
}

function itemsListComparer(field) {
  // Based on https://stackoverflow.com/a/4760279/4384120

  let sortOrder = 1
  if (field[0] === '-') {
    sortOrder = -1
    field = field.substr(1)
  }

  return function (a, b) {
    let aField = a[field]
    let bField = b[field]

    if (aField instanceof Array) {
      aField = aField.length
    }

    if (bField instanceof Array) {
      bField = bField.length
    }

    const result = !(aField || bField)
      ? // If both empty then no order
        0
      : !aField
      ? // If a is empty b goes first
        1
      : !bField
      ? // If b is empty a goes first
        -1
      : // If both non-empty compare as normal
        aField.toString().localeCompare(bField, undefined, { numeric: true })

    return result * sortOrder
  }
}

const store = createStore({
  state() {
    return {
      datasets: datasets,
      datasetsFilters: {},
      datasetsSortBy: ''
    }
  },

  getters: {
    displayDatasets: (state) => {
      let displayDatasets = JSON.parse(JSON.stringify(state.datasets))

      for (const field in state.datasetsFilters) {
        displayDatasets = filterItemsList(
          displayDatasets,
          field,
          state.datasetsFilters[field]
        )
      }

      if (state.datasetsSortBy && state.datasetsSortBy.length !== 0) {
        displayDatasets.sort(itemsListComparer(state.datasetsSortBy))
      }

      return displayDatasets
    },

    datasetFieldUnique: (state) => (field) => {
      return getUniqueValues(state.datasets, field)
    }
  },

  mutations: {
    setDatasetsFilter(state, payload) {
      state.datasetsFilters[payload.field] = payload.values
    },
    setDatasetsSortBy(state, value) {
      state.datasetsSortBy = value
    }
  }
})

export default store
