<template>
  <nav class="bg-gradient-to-t from-purple-700 to-purple-900">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Mobile menu -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.
              Heroicon name: outline/menu
              Menu open: "hidden", Menu closed: "block"
            -->
            <svg
              class="h-6 w-6"
              :class="[mobileMenuOpen ? 'hidden' : 'block']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              @click="openMobileMenu"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
              Icon when menu is open.
              Heroicon name: outline/x
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="h-6 w-6"
              :class="[mobileMenuOpen ? 'block' : 'hidden']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              @click="closeMobileMenu"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- Navbar left -->
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="../assets/icon.png"
              alt="sfaira portal icon"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="../assets/logo.png"
              alt="sfaira portal logo"
            />
          </div>
          <!-- Page link buttons -->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <template v-for="item in items" :key="item.title">
                <router-link
                  :to="item.link"
                  class="border-2 bg-white border-yellow-600 text-orange-600 hover:bg-orange-100 px-3 py-2 rounded-full text-sm font-medium"
                  >{{ item.title }}</router-link
                >
              </template>
            </div>
          </div>
        </div>
        <!-- Navbar right -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- <button
            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">View notifications</span> -->
          <!-- Heroicon name: outline/bell -->
          <!-- <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg> -->
          <!-- </button> -->
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" :class="[mobileMenuOpen ? 'sm:hidden' : 'hidden']">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <template v-for="item in items" :key="item.title">
          <router-link
            :to="item.link"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >{{ item.title }}</router-link
          >
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      mobileMenuOpen: false,
      items: [
        { title: 'Home', link: import.meta.env.BASE_URL },
        { title: 'Datasets', link: import.meta.env.BASE_URL + 'Datasets' },
        { title: 'About', link: import.meta.env.BASE_URL + 'About' }
      ]
    }
  },

  methods: {
    openMobileMenu() {
      this.mobileMenuOpen = true
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
@layer components {
  a.router-link-exact-active {
    @apply bg-gradient-to-t from-yellow-300 to-yellow-600 text-white font-bold border-white hover:border-yellow-600 hover:text-yellow-600;
  }
}
</style>
