<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">Nuxt Dojo</NuxtLink>
      </nav>
    </header>

    <!-- output page content -->

    <div class="mx-auto p-4">
      <slot />
    </div>

    <footer class="mx-auto p-4">
      <ul class="flex gap-4">
        <li><NuxtLink to="/"> Home</NuxtLink></li>
        <li><NuxtLink to="/about"> About</NuxtLink></li>
        <li><NuxtLink to="/products"> Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<script setup></script>

<style>
.router-link-exact-active {
  color: #12b488;
}
</style>
