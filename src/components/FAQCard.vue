<template>
  <div class="my-1">
    <div>
      <a
        href="#"
        :class="[
          open
            ? 'bg-gradient-to-t from-orange-300 to-orange-600 border-orange-400 font-bold text-white'
            : 'bg-gradient-to-t from-orange-100 to-orange-200 text-gray-900'
        ]"
        class="flex justify-between px-2 py-4 sm:px-6 rounded-full cursor-pointer border-4 border-orange-300 hover:border-orange-600 hover:bg-orange-200"
        @click="toggleOpen"
      >
        <p class="text-xl">
          <slot name="question"></slot>
        </p>
        <!-- Heroicon name: plus-circle -->
        <svg
          v-show="!open"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <!-- Heroicon name: minus-circle -->
        <svg
          v-show="open"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </a>
    </div>
    <div
      v-show="open"
      class="text-lg px-2 py-4 mt-1 sm:px-6 rounded-3xl border-4 border-orange-300 bg-orange-50"
    >
      <slot name="answer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQCard',

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
