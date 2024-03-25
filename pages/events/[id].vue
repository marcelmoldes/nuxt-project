<template>
  <div class="m-20">
    <EventsDetailsComponent :event="event"/>
  </div>
</template>
<script setup>
const route = await useRoute();
const {data} = await useFetch(`http://3.85.124.220:1337/api/events/${route.params.id}`)
const event = ref(data.value.data.attributes);
</script>
