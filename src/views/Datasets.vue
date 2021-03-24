<template>
  <div class="hflex flex flex-wrap flex-grow bg-red-100 h-5/6">
    <div class="px-1 w-full flex md:w-1/4 bg-blue-300 h-auto">
      <div class="flex-grow bg-green-400 m-1">
        <div
          class="w-full p-1 my-1 rounded-full bg-black text-center text-xl text-gray-100 font-bold"
        >
          Filters
        </div>
        <DatasetsFilter prompt="Author..." field="author" />
        <DatasetsFilter prompt="Year..." field="year" />
        <DatasetsFilter prompt="Normalization..." field="normalization" />
        <DatasetsFilter prompt="Organism..." field="organism" />
        <DatasetsFilter prompt="Organ..." field="organ" />
        <DatasetsFilter prompt="Sex..." field="sex" />
        <DatasetsFilter prompt="Healthy?..." field="healthy" />
        <DatasetsFilter prompt="State..." field="state" />
        <DatasetsFilter prompt="Annotated?..." field="annotated" />
        <DatasetsFilter prompt="Cell type..." field="cell_types" />
        <div
          class="w-full p-1 my-1 rounded-full bg-black text-center text-xl text-gray-100 font-bold"
        >
          Sorting
        </div>
        <DatasetsSorter :fields="sortFields" />
      </div>
    </div>

    <div class="px-1 w-full md:w-2/4 flex bg-blue-400 h-full">
      <div class="py-2 my-1 mx-auto overflow-auto flex-grow bg-green-400">
        <!-- {{ this.$store.state.datasets }} -->
        <DatasetsCardList :items="datasets" />
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import DatasetsCardList from '../components/DatasetsCardList.vue'
import DatasetsFilter from '../components/DatasetsFilter.vue'
import DatasetsSorter from '../components/DatasetsSorter.vue'

export default {
  name: 'Datasets',

  components: {
    DatasetsCardList,
    DatasetsFilter,
    DatasetsSorter
  },

  data() {
    return {
      sortFields: [
        { name: 'Year', value: 'year' },
        { name: 'Number of cells', value: 'ncells' },
        { name: 'Number of cell types', value: 'cell_types' }
      ]
    }
  },

  computed: {
    datasets() {
      return this.$store.getters.displayDatasets
    }
  }
}
</script>
