<template>
  <div>
    <navbar />
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-12">
          <h5>Home / Categories</h5>
        </div>
      </div>
      <div class="row mt-3">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="search ......"
            aria-label="search"
            aria-describedby="basic-addon1"
            @keyup="searchProduct"
          />
          <span class="input-group-text" id="basic-addon1"
            ><i class="bi bi-search"></i
          ></span>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-3 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "../components/Navbar.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";

const products = ref([]);
const search = ref("");

function setProducts(data) {
  products.value = data;
}

function searchProduct() {
  if (search.value) {
    axios
      .get(
        `https://sistemtoko.com/public/demo/product?page=1&sorting=Lates&categories=all&search_name=${search.value}`
      )
      .then((response) => {
        console.log("berhasil", response.data.aaData);
        setProducts(response.data.aaData);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  } else {
    // Panggilan API untuk produk tanpa parameter query
    axios
      .get("https://sistemtoko.com/public/demo/product")
      .then((response) => {
        console.log("berhasil", response.data.aaData);
        setProducts(response.data.aaData);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }
}

onMounted(() => {
  // Panggilan API untuk produk tanpa parameter query
  axios
    .get("https://sistemtoko.com/public/demo/product")
    .then((response) => {
      console.log("berhasil", response.data.aaData);
      setProducts(response.data.aaData);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
});
</script>

<style scoped>
</style>