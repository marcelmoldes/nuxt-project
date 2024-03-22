<template>
  <div class="m-20">
    <ArtistsDetailsComponent :artist="artist"/>
  </div>
</template>
<script setup>
const route = await useRoute();
const { data } = await useFetch(`http://3.85.124.220:1337/api/artists/${route.params.id}`)
const artist = ref(data.value.data.attributes);
</script>
