<template>
  <div class="spacer-120 spacer-md-90 spacer-sm-30"></div>
  <div class="discography-page">
    <div class="container px-4">
      <div class="row g-4 g-md-5">
        <discography-card :albums="albums"></discography-card>
      </div>
    </div>
  </div>



</template>
<script>
export default defineNuxtComponent({
  async asyncData() {
    const {data} = await $fetch('http://3.85.124.220:1337/api/albums/?populate=deep')
    return {
      albums: data
    }
  },
})
</script>
