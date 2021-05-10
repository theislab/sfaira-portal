<template>
  <div class="flex flex-col w-full sm:w-2/3 mx-auto">
    <div class="m-auto my-10">
      <img
        class="lg:block w-full max-w-2xl m-auto"
        src="../assets/logo.png"
        alt="sfaira portal logo"
      />
    </div>
    <p class="my-10 text-6xl text-center">Welcome to the sfaira portal!</p>
    <p class="my-10 text-3xl">
      sfaira is a dataset and model repository for single-cell RNA-sequencing
      (scRNA-seq) data. The sfaira portal provides an interactive way to explore
      the resources provided by sfaira.
    </p>
    <div class="mx-auto">
      <router-link
        to="/Datasets"
        class="border-2 border-yellow-600 px-3 py-2 mx-2 rounded-full text-3xl bg-gradient-to-t from-yellow-300 to-yellow-600 text-white font-bold hover:border-yellow-600 hover:text-yellow-600"
      >
        View datasets
      </router-link>
    </div>
    <p class="my-10 text-3xl">
      For more information about the sfaira software try these links:
    </p>
    <div class="mx-auto">
      <a
        href="https://sfaira.readthedocs.io/"
        class="inline-block border-2 border-yellow-600 px-3 py-2 mx-2 rounded-full text-3xl bg-gradient-to-t from-yellow-300 to-yellow-600 text-white font-bold hover:border-yellow-600 hover:text-yellow-600"
      >
        <span class="inline-block">
          <!-- Heroicon name: document-text -->
          <svg
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        </span>
        sfaira docs
      </a>
      <a
        href="https://github.com/theislab/sfaira"
        class="inline-block border-2 border-yellow-600 px-3 py-2 mx-2 rounded-full text-3xl bg-gradient-to-t from-yellow-300 to-yellow-600 text-white font-bold hover:border-yellow-600 hover:text-yellow-600"
      >
        <span class="inline-block">
          <!-- Feather icon name: github -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </span>
        sfaira GitHub
      </a>
    </div>
    <p class="my-10 text-3xl">
      If any part of sfaira is useful to you we would appreciate you taking the
      time to cite the sfaira publication, see the
      <router-link
        to="/About"
        class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >about page</router-link
      >
      for details.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',

  mounted() {
    this.$nextTick(function () {
      this.$mixpanel.track('Open page', {
        view: 'Home'
      })
    })
  }
}
</script>
