<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import Dashboard from "../components/Dashboard.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";

const products = ref([]);

function setProduct(data) {
  products.value = data;
}

onMounted(() => {
  axios
    .get("https://sistemtoko.com/public/demo/product")
    .then(function (response) {
      console.log("berhasil", response.data.aaData);
      setProduct(response.data.aaData);
    })
    .catch(function (error) {
      console.error("Error fetching products:", error);
    });
});
</script>

<template>
  <main>
    <Navbar />
    <div class="container-fluid">
      <Dashboard />
      <div class="container">
        <div class="row mt-3">
          <div class="col-3 mt-4" v-for="product in products" :key="product.id">
            <CardProduct :product="product" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

