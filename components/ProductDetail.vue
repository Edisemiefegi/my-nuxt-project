<template>
  <div class="text-center p-3 rounded-md bg-white shadow-md h-full">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="" class="mx-auto my-7 max-w-[400px]" />
      </div>
      <div class="p-7">
        <h1 class="text-4xl my-7">{{ product.title }}</h1>
        <p class="text-xl my-7">Price -${{ product.price }}</p>
        <p class="font-bold border-b-2 mb-4 pb-2">Product description:</p>
        <p class="my-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="pi pi-shopping-cart mr-2"></i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>
