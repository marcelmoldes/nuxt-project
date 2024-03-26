<template>
  <div class="m-20">
    <EventsDetailsComponent :event="event"/>
  </div>
</template>
<script setup>
const route = await useRoute();
const {data} = await useFetch(`http://api.basicocrm.com:1337/api/events/${route.params.id}?populate=deep`)
const event = ref(data.value.data.attributes);
</script>
