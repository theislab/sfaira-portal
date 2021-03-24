<template>
  <div class="relative w-full max-w-sm my-0 mx-auto">
    <input
      v-model.trim="inputValue"
      class="w-full py-1 px-2 border border-transparent bg-blue-50 leading-6 outline-none rounded-lg focus:bg-white focus:border-blue-50 placeholder-opacity-70"
      type="text"
      :placeholder="prompt"
      @click="openList()"
    />
    <div
      v-show="listOpen"
      class="absolute w-full max-h-96 mt-1 overflow-y-auto bg-white shadow-lg rounded-lg z-50"
    >
      <div
        v-for="item in itemList"
        v-show="itemVisible(item)"
        :key="item"
        class="flex w-full py-2 px-2 cursor-pointer hover:bg-blue-50"
        @click="selectItem(item)"
      >
        {{ item }}
      </div>
    </div>
    <div class="my-1">
      <div
        v-for="item in selectedItems"
        :key="item"
        class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 mx-1 my-1 bg-blue-200 text-blue-700 rounded-full"
      >
        {{ item }}
        <svg
          class="w-3 h-3 mx-1 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click="unselectItem(item)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatasetsFilter',

  props: {
    prompt: {
      type: String,
      default: () => 'Filter...'
    },
    field: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      listOpen: false,
      inputValue: '',
      selectedItems: []
    }
  },

  computed: {
    itemList() {
      return this.$store.getters.datasetFieldUnique(this.field)
    }
  },

  mounted() {
    document.addEventListener('click', this.closeList)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeList)
  },

  methods: {
    openList() {
      this.listOpen = true
    },
    closeList(e) {
      if (!this.$el.contains(e.target)) {
        this.listOpen = false
      }
    },
    itemVisible(item) {
      const currentName = item.toLowerCase()
      const currentInput = this.inputValue.toLowerCase()
      if (this.selectedItems.includes(item)) {
        return false
      }
      if (!currentInput || currentInput.length === 0) {
        return true
      }
      return currentName.includes(currentInput)
    },
    selectItem(theItem) {
      this.selectedItems.push(theItem)
      this.inputValue = ''
      this.listOpen = false
      this.$store.commit('setDatasetsFilter', {
        field: this.field,
        values: this.selectedItems
      })
    },
    unselectItem(theItem) {
      this.selectedItems = this.selectedItems.filter(function (item) {
        return item !== theItem
      })
      this.$store.commit('setDatasetsFilter', {
        field: this.field,
        values: this.selectedItems
      })
    }
  }
}
</script>
