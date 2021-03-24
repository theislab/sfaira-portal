<template>
  <div
    class="bg-white shadow overflow-hidden sm:rounded-lg w-full my-1 mx-1 px-1"
  >
    <div
      class="px-4 py-5 sm:px-6 border-4 border-green-300 border-opacity-0 hover:border-opacity-100"
      @click="toggleOpen"
    >
      <p
        class="text-xs leading-6 font-medium text-gray-500 overflow-hidden"
        :class="[open ? 'hidden' : '']"
      >
        {{ data.id }}
      </p>
      <p class="mt-1 max-w-2xl text-lg text-gray-900">
        {{ data.author }} {{ data.organism }} {{ data.organ[0] }}
        {{ data.year }}
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl :class="[open ? '' : 'hidden']">
        <DatasetCardField name="ID" :value="data.id" />
        <DatasetCardField name="Author" :value="data.author" />
        <DatasetCardField
          name="DOI"
          :value="data.doi"
          :link="'https://doi.org/' + data.doi"
        />
        <DatasetCardField name="Year" :value="data.year" />
        <DatasetCardField
          name="Number of cells"
          :value="data.ncells.toString()"
        />
        <DatasetCardField name="Normalization" :value="data.normalization" />
        <DatasetCardField name="Organism" :value="data.organism" />
        <DatasetCardField name="Organ(s)" :value="data.organ.join(', ')" />
        <DatasetCardField name="Age(s)" :value="data.age.join(', ')" />
        <DatasetCardField name="Sex(es)" :value="data.sex.join(', ')" />
        <DatasetCardField name="Healthy?" :value="data.healthy" />
        <DatasetCardField name="State" :value="data.state" />
        <DatasetCardField name="Annotated?" :value="data.annotated" />
        <DatasetCardField
          name="Cell types"
          :value="data.cell_types.join(', ')"
        />
      </dl>
    </div>
  </div>
</template>

<script>
import DatasetCardField from './DatasetCardField.vue'

export default {
  name: 'DatasetCard',

  components: {
    DatasetCardField
  },

  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      open: false
    }
  },

  methods: {
    toggleOpen() {
      this.open = !this.open
    }
  }
}
</script>
