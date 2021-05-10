<template>
  <div class="hflex flex flex-wrap flex-grow h-5/6">
    <div class="px-1 w-full flex md:w-1/4 h-auto">
      <div class="flex-grow m-1">
        <div
          class="w-full p-1 my-1 rounded-full bg-gradient-to-t from-orange-300 to-orange-600 text-center text-xl text-gray-100 font-bold"
        >
          Filters
        </div>
        <DatasetsFilter prompt="Author..." field="author" />
        <DatasetsFilter prompt="Year..." field="year" />
        <DatasetsFilter prompt="Assay..." field="assay" />
        <DatasetsFilter prompt="Normalization..." field="normalization" />
        <DatasetsFilter prompt="Organism..." field="organism" />
        <DatasetsFilter prompt="Organ..." field="organ" />
        <DatasetsFilter prompt="Source..." field="sample_source" />
        <DatasetsFilter
          prompt="Developmental stages..."
          field="development_stage"
        />
        <DatasetsFilter prompt="Sex..." field="sex" />
        <DatasetsFilter prompt="State..." field="state" />
        <DatasetsFilter prompt="Annotated?..." field="annotated" />
        <DatasetsFilter prompt="Cell type..." field="cell_types" />
        <div
          class="w-full p-1 my-1 rounded-full bg-gradient-to-t from-orange-300 to-orange-600 text-center text-xl text-gray-100 font-bold"
        >
          Sorting
        </div>
        <DatasetsSorter :fields="sortFields" />
      </div>
    </div>

    <div class="px-1 w-full md:w-2/4 flex h-full">
      <div class="py-2 my-1 mx-auto overflow-auto flex-grow">
        <DatasetsCardList :items="datasets" />
      </div>
    </div>
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
  },

  mounted() {
    this.$nextTick(function () {
      this.$mixpanel.track('Open page', {
        view: 'Datasets'
      })
    })
  }
}
</script>
