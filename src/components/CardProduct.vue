<template>
  <div class="card" style="width: 18rem">
    <img
      :src="product.photo"
      class="card-img-top"
      :alt="product.name || 'Product image'"
    />
    <div class="card-body text-center">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Rp.{{ product.price }}</p>
      <a href="#" class="btn btn-success">ADD TO CART</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
</style>
