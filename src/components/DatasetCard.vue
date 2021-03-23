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
        v-bind:class="[open ? 'hidden' : '']"
      >
        {{ data.id }}
      </p>
      <p class="mt-1 max-w-2xl text-lg text-gray-900">
        {{ data.author }} {{ data.organism }} {{ data.organ[0] }}
        {{ data.year }}
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl v-bind:class="[open ? '' : 'hidden']">
        <div class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">ID</dt>
          <dd
            class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3 break-words"
          >
            {{ data.id }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Author</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.author }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">DOI</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            <a
              :href="'https://doi.org/' + data.doi"
              class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >{{ data.doi }}</a
            >
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Year</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.year }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Number of cells</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.ncells }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Normalization</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.normalization }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Organism</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.organism }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Organ(s)</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.organ.join(', ') }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Age(s)</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.age.join(', ') }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Sex(es)</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.sex.join(', ') }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Healthy?</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.healthy }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">State</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.state }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Annotated?</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.annotated }}
          </dd>
        </div>
        <div
          class="odd:bg-gray-50 px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Cell types</dt>
          <dd class="mt-1 mr-10 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
            {{ data.cell_types.join(', ') }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatasetCard',

  props: {
    data: Object
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
