<template>
  <template v-for="section of sections" :key="section.id">
    <hero-component
        v-if="section.__component === 'components.hero'"
        :image_url="'http://3.85.124.220:1337' + section.image.data.attributes.url"
    />
    <albums-component
        v-if="section.__component === 'components.album-carousel'"
        :albums="section.albums.data"/>
    <album-grid
        v-if="section.__component === 'components.album-grid'"
        :albums="section.albums.data"
    />
    <about-component v-if="section.__component === 'components.presentation-block'"
                     :description="section.description[0].children[0].text" :subtitle="section.subtitle"
                     :title="section.title"/>
    <events-component v-if="section.__component === 'components.event-calendar'" :events="section.events.data"/>
    <news-component v-if="section.__component === 'components.news-section'" :news="section.news.data"/>
  </template>
</template>
<script>
export default defineNuxtComponent({
  props: ['sections']
})
</script>