<template>
  <div class="m-20">
    <AlbumDetailsComponent :album="album"/>
  </div>
</template>
<script setup>
const route = await useRoute();
const {data} = await useFetch(`http://3.85.124.220:1337/api/albums/${route.params.id}?populate=deep`)
const album = ref(data.value.data.attributes);

</script>
