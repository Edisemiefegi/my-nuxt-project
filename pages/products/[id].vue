<template>
  <div>
    <head>
      <Title>NUxt dojo | {{ product.title }}</Title>
    </head>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;

const url = "https://fakestoreapi.com/products/" + id;

// fetch product

const { data: product } = await useFetch(url, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "product not found ",
    fetal: true,
  });
}
</script>
