<script setup lang="ts">
const navOpen = ref(false)
</script>

<template>
  <div class="w-full mx-auto bg-white 2xl:max-w-7xl border-b mb-2">
    <div class="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div class="flex flex-row items-center justify-between lg:justify-start">
        <a class="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl" href="/">
          <span class="lg:text-lg uppecase focus:ring-0">
            Portside
          </span>
        </a>
        <button class="flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden" @click="navOpen = !navOpen">
          <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{ 'hidden': navOpen, 'inline-flex': !navOpen }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="{ 'hidden': !navOpen, 'inline-flex': navOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav :class="{ flex: navOpen, hidden: !navOpen }" class="flex-col flex-grow py-4 md:flex lg:py-0 md:justify-end md:flex-row ">
        <ul class="flex flex-col gap-y-2 md:flex-row md:gap-x-4">
          <li>
            <ULink to="/services" active-class="text-primary">
              Services
            </ULink>
          </li>
          <li>
            <ULink to="/aboutus" active-class="text-primary">
              About Us
            </ULink>
          </li>
          <li>
            <ULink to="/contact" active-class="text-primary">
              Contact
            </ULink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
