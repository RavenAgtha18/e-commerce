<template>
  <div class="card shadow">
    <div class="d-flex flex-row flex-wrap">
      <div v-for="image in imagePaths" :key="image">
        <img
          :src="image"
          class="card-img ps-4"
          :alt="'Image'"
          style="
            width: 100%;
            height: auto;
            flex-basis: 33.33%;
            margin-left: 18px;
            border-radius: 4px;
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const images = import.meta.glob("../assets/category/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});

const imagePaths = Object.values(images);
console.log("🚀 ~ imagePaths:", imagePaths);
</script>

<style scoped>
.card {
  width: 100%;
}
.card-img-top {
  width: 100%;
  height: auto;
}
</style>