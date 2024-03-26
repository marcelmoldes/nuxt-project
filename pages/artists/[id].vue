<template>
  <div class="m-20">
    <ArtistsDetailsComponent :artist="artist"/>
  </div>
</template>
<script setup>
const route = await useRoute();
const {data} = await useFetch(`http://api.basicocrm.com:1337/api/artists/${route.params.id}?populate=deep`)
const artist = ref(data.value.data.attributes);
</script>
