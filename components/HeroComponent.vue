<template>
  <div class="hero-4 bg-gray-400">
    <div class="parallax-item p-6  px-40">
      <img alt="otf" class="mt-9 shadow-2xl shadow-gray-600"
           :src="image_url">
    </div>
  </div>
</template>
<script>
export default defineNuxtComponent({
  props: ['image_url']
})
</script>