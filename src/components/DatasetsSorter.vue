<template>
  <div class="relative w-full my-0 mx-auto">
    <div class="w-full max-h-96 mt-1">
      <div
        v-for="field in fields"
        :key="field"
        class="w-full my-1 py-2 px-2 cursor-pointer border-2 border-yellow-300 text-yellow-600 rounded-2xl hover:border-pink-600 hover:bg-pink-200"
        :class="[field.value === selectedField ? 'bg-gradient-to-t from-transparent to-pink-300 text-pink-600 font-bold border-pink-600' : '']"
        @click="select(field.value)"
      >
        {{ field.name }}
        <div v-if="field.value === selectedField" class="float-right pt-1">
          <svg
            v-if="sortOrder === ''"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
          <svg
            v-else
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatasetsSorter',

  props: {
    fields: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selectedField: '',
      sortOrder: ''
    }
  },

  methods: {
    select(field) {
      if (field === this.selectedField) {
        if (this.sortOrder === '') {
          this.sortOrder = '-'
        } else {
          this.selectedField = ''
          this.sortOrder = ''
        }
      } else {
        this.selectedField = field
        this.sortOrder = ''
      }
      this.$store.commit(
        'setDatasetsSortBy',
        this.sortOrder + this.selectedField
      )
    }
  }
}
</script>
