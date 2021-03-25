<template>
  <div class="py-2 mx-auto overflow-auto flex-grow h-full">
    <div class="text-2xl text-center text-orange-600">
      Showing <span class="text-purple-600">{{ items.length }}</span> datasets
    </div>
    <div class="flex flex-wrap mx-1">
      <template v-for="item in items" :key="item.name">
        <DatasetCard :data="item" />
      </template>
    </div>
  </div>
</template>

<script>
import DatasetCard from './DatasetCard.vue'

export default {
  name: 'DatasetsCardList',

  components: {
    DatasetCard
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
