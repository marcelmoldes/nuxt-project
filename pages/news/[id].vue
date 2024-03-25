<template>
  <div class="m-20">
    <NewsDetailsComponent :article="article"/>
  </div>
</template>
<script setup>
const route = await useRoute();
const {data} = await useFetch(`http://3.85.124.220:1337/api/news/${route.params.id}?populate=deep`)
const article = ref(data.value.data.attributes);
</script>
