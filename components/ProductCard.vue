<template>
  <div class="text-center p-3 rounded-md bg-white shadow-md h-full w-full">
    <div class="flex justify-center items-center">
      <img :src="product.image" alt="" class="object-contain h-36" />
    </div>
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <button class="btn my-4">view details</button>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
