<template>
  <div class="m-20">
    <template v-for="section of sections" :key="section.id">
      <hero-component
          v-if="section.__component === 'components.hero'"
          :image_url="'http://3.85.124.220:1337' + section.image.data.attributes.url"
      />
      <about-component v-if="section.__component === 'components.presentation-block'"
                       :description="section.description[0].children[0].text" :subtitle="section.subtitle"
                       :title="section.title"/>
      <albums-component v-if="section.__component === 'components.album-carousel'"
                        :albums="section.albums.data"/>
      <events-component v-if="section.__component === 'components.event-calendar'" :events="section.events.data"/>
      <news-component v-if="section.__component === 'components.news-section'" :news="section.news.data"/>


    </template>


  </div>
</template>
<script>
export default defineNuxtComponent({
  async asyncData() {
    const {data} = await $fetch('http://3.85.124.220:1337/api/pages?populate=deep&filters[slug]=home')
    return {
      sections: data[0]['attributes']['sections']
    }
  },
})
</script>
