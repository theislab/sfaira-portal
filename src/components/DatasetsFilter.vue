<template>
  <div class="relative w-full my-0 mx-auto">
    <input
      v-model.trim="inputValue"
      class="w-full mb-1 py-1 px-2 border-2 border-orange-300 text-orange-300 bg-orange-50 leading-6 outline-none rounded-2xl focus:bg-white focus:border-orange-500 placeholder-orange-600 focus:placeholder-orange-500 placeholder-opacity-50 hover:border-orange-600 hover:bg-orange-200"
      type="text"
      :placeholder="prompt"
      @click="openList()"
    />
    <div
      v-show="listOpen"
      class="absolute w-full pr-3 bg-white shadow-lg rounded-2xl border-2 border-orange-500 z-50"
    >
      <div class="overflow-y-auto max-h-80 w-auto rounded-2xl">
        <div
          v-for="item in itemList"
          v-show="itemVisible(item)"
          :key="item"
          class="flex w-full py-1 px-1 cursor-pointer hover:bg-yellow-50 rounded-2xl"
          @click="selectItem(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div>
      <div
        v-for="item in selectedItems"
        :key="item"
        class="text-xs inline-flex items-center font-bold leading-sm px-2 py-1 mr-1 my-1 rounded-full text-white bg-gradient-to-t from-orange-300 to-orange-600"
      >
        {{ item }}
        <div
          class="ml-1 p-0.5 border border-white hover:border-orange-600 hover:text-orange-500 hover:bg-white rounded-full cursor-pointer"
          @click="unselectItem(item)"
        >
          <svg
            class="w-2 h-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
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
