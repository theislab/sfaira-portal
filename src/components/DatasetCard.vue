<template>
  <div
    class="bg-white shadow-md overflow-hidden sm:rounded-lg w-full my-1 mx-1"
  >
    <div
      :class="[
        open
          ? 'bg-gradient-to-t from-orange-300 to-orange-600 border-orange-400 font-bold'
          : ''
      ]"
      class="px-4 py-5 sm:px-6 rounded-lg cursor-pointer border-4 border-orange-300 hover:border-orange-600 hover:bg-orange-200"
      @click="toggleOpen"
    >
      <p
        class="text-xs leading-6 font-medium text-gray-500 overflow-hidden"
        :class="[open ? 'hidden' : '']"
      >
        {{ data.id }}
      </p>
      <p
        class="mt-1 max-w-2xl text-lg"
        :class="[open ? 'text-white' : 'text-gray-900']"
      >
        {{ data.author }} {{ data.organism }} {{ data.organ[0] }}
        {{ data.year }}
      </p>
    </div>
    <div>
      <dl :class="[open ? 'border-4 border-orange-400' : 'hidden']">
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
