<template>
  <div
    v-if="value !== ''"
    class="odd:bg-orange-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
  >
    <dt class="text-sm font-medium text-gray-500">{{ name }}</dt>
    <dd
      v-if="link === ''"
      class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3 break-words"
    >
      {{ value }}
    </dd>
    <dd v-else class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
      <a
        :href="link"
        class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >{{ value }}</a
      >
    </dd>
  </div>
</template>

<script>
export default {
  name: 'DatasetCardField',

  props: {
    name: {
      type: String,
      default: () => 'Name'
    },
    value: {
      type: String,
      default: () => 'Value'
    },
    link: {
      type: String,
      default: () => ''
    }
  }
}
</script>
