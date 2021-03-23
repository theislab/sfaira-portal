<template>
  <div class="hflex flex flex-wrap flex-grow bg-red-100 h-5/6">
      <div class="px-1 w-full flex md:w-1/4 bg-blue-300 h-auto">
        <div class="flex-grow bg-green-400 m-1">
          <div
            class="w-full p-1 my-1 rounded-full bg-black text-center text-xl text-gray-100 font-bold"
          >
            Filters
          </div>
          <!-- <DropdownList
            prompt="Eye colour..."
            itemsGetter="eyeColours"
            commitHook="setSelEyeColours"
          />
          <DropdownList
            prompt="Height..."
            itemsGetter="heights"
            commitHook="setSelHeights"
          /> -->
          <div
            class="w-full p-1 my-1 rounded-full bg-black text-center text-xl text-gray-100 font-bold"
          >
            Sorting
          </div>
          <!-- <DropdownSelector
            prompt="Sort by..."
            :itemList="sortItems"
            commitHook="setSortBy"
          /> -->
        </div>
      </div>

      <div class="px-1 w-full md:w-2/4 flex bg-blue-400 h-full">
        <div class="py-2 my-1 mx-auto overflow-auto flex-grow bg-green-400">
          {{ this.$store.state.datasets}}
        </div>
        <!-- <CardList :items="cardItems" /> -->
      </div>
    <!-- </div> -->
  </div>
</template>
