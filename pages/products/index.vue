<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="item in products" :key="item" class="border h-68">
        <ProductCard :product="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

// fetch product
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>
