<template>
  <div class="m-20">
    <DynamicZoneComponent :sections="sections" v-if="sections"/>
  </div>
</template>
<script>
export default defineNuxtComponent({
  async asyncData() {
    const {data} = await $fetch('http://3.85.124.220:1337/api/pages?populate=deep&filters[slug]=news')
    return {
      sections: data.length > 0 ? data[0]['attributes']['sections'] : []
    }
  },
})
</script>
