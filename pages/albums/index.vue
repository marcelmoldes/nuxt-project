<template>
  <div class="m-20">
    <DynamicZoneComponent v-if="sections" :sections="sections"/>

  </div>
</template>
<script>
export default defineNuxtComponent({
  async asyncData() {
    const {data} = await $fetch('http://api.basicocrm.com:1337/api/pages?populate=deep&filters[slug]=discography')
    return {
      sections: data.length > 0 ? data[0]['attributes']['sections'] : []
    }
  },
})
</script>
