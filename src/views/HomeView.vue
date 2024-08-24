<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import Dashboard from "../components/Dashboard.vue";
import CardProduct from "../components/CardProduct.vue";
import CardCategories from "../components/CardCategories.vue";
import axios from "axios";

const products = ref([]);
const categories = ref([]);

function setProducts(data) {
  products.value = data;
}

function setCategories(data) {
  categories.value = data;
}

onMounted(() => {
  // Panggilan API untuk produk
  axios
    .get("https://sistemtoko.com/public/demo/product")
    .then(function (response) {
      console.log("berhasil", response.data.aaData);
      setProducts(response.data.aaData);
    })
    .catch(function (error) {
      console.error("Error fetching products:", error);
    });

  // Panggilan API untuk kategori
  axios
    .get("https://sistemtoko.com/public/demo/cat")
    .then(function (response) {
      console.log("berhasil", response.data.aaData);
      setCategories(response.data.aaData);
    })
    .catch(function (error) {
      console.error("Error fetching categories:", error);
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
          <div class="col-12 mt-3 d-flex flex-row flex-wrap">
            <CardCategories />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12" style="background: #f1f1f1">
            <h5>Home / Categories</h5>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-3 mt-4" v-for="product in products" :key="product.id">
            <CardProduct :product="product" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
