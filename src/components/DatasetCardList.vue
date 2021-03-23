<template>
  <div class="py-2 mx-auto overflow-auto flex-grow h-full">
    <div v-if="items.length > 0" class="flex flex-wrap mx-1">
      <template v-for="item in items" :key="item.name">
        <DatasetCard :data="item" />
      </template>
    </div>
    <div v-else>No items found</div>
  </div>
</template>

<script>
import DatasetCard from './DatasetCard.vue'

export default {
  name: 'DatasetCardList',

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
