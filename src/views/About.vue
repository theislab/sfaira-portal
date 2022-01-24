<template>
  <div class="flex flex-col w-full sm:w-2/3 mx-auto">
    <p class="my-10 text-6xl text-center">More about sfaira</p>
    <p class="my-5 text-3xl">
      sfaira is a model and data repository for single-cell RNA-sequencing
      (scRNA-seq) data. As well as the models and datasets themselves it is a
      Python package for accessing them. This sfaira portal website displays the
      resources available through sfaira.
    </p>
    <p class="my-5 text-3xl">
      If you use sfaira in your work please cite the following publication:
    </p>
    <div class="px-2 py-2 mb-5 border-2 border-purple-900 rounded-lg shadow-lg">
      <p class="text-xl my-1 text-black">
        Sfaira accelerates data and model reuse in single cell genomics
      </p>
      <p class="text-lg font-light my-1">
        David S. Fischer, Leander Dony, Martin König, Abdul Moeed, Luke Zappia,
        Lukas Heumos, Sophie Tritschler, Olle Holmberg, Hananeh Aliee, Fabian J.
        Theis
      </p>
      <p class="text-lg my-1">
        <span class="italic">Genome Biology</span> 2021;22:248; doi:
        <a
          href="https://doi.org/10.1186/s13059-021-02452-6"
          class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >https://doi.org/10.1186/s13059-021-02452-6</a
        >
      </p>
    </div>
    <p class="my-4 text-4xl text-center">FAQs</p>
    <FAQCard>
      <template #question>
        <h1>What is the sfaira package?</h1>
      </template>
      <template #answer>
        <h1>
          The sfaira Python package is the main interface to the sfaira
          repository and can be installed from
          <a
            href="https://pypi.org/project/sfaira/"
            class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >PyPI</a
          >. Find out more in the
          <a
            href="https://sfaira.readthedocs.io/"
            class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >sfaira documentation</a
          >
          or the sfaira
          <a
            href="https://github.com/theislab/sfaira"
            class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >GitHub repository</a
          >.
        </h1>
      </template>
    </FAQCard>
    <FAQCard>
      <template #question>
        <h1>Why isn't sfaira portal working?</h1>
      </template>
      <template #answer>
        <h1>
          We do our best to keep the sfaira portal website up to date but
          occasionally things may break. If you come across a problem please let
          us know by opening an issue on the
          <a
            href="https://github.com/theislab/sfaira-portal"
            class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >sfaira portal GitHub</a
          >.
        </h1>
      </template>
    </FAQCard>
  </div>
</template>

<script>
import FAQCard from '../components/FAQCard.vue'

export default {
  name: 'About',

  components: {
    FAQCard
  },

  computed: {
    datasets() {
      return this.$store.getters.displayDatasets
    }
  },

  mounted() {
    this.$nextTick(function () {
      this.$mixpanel.track('Open page', {
        view: 'About'
      })
    })
  }
}
</script>
