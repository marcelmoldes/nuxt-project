<template>
  <div class="m-20">
    <template v-for="section of sections" :key="section.id">
      <hero-component
          :image_url="'http://52.90.19.171:1337' + section.image.data.attributes.url"
          v-if="section.__component === 'components.hero'"
      />
    </template>
    <about-component :about="about"/>
    <albums-component :albums="albums"/>
    <events-component :events="events" />
    <news-component :news="news" />
  </div>
</template>

<script>
export default defineNuxtComponent({
  async asyncData () {
    const { data }= await $fetch('http://52.90.19.171:1337/api/pages?populate[sections][populate]=*&filters[slug]=home')
    return {
      sections: data[0]['attributes']['sections']
    }
  },
  data() {
    return {
      hero: {
        hero_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcBVZVGRbOzpZQa228ZoKV-PT9SrtzbTnEvjwgy3mPAw&s',
      },
      about: {},
      albums: [{
        album_cover: 'https://cdns-images.dzcdn.net/images/cover/c208e66ed498d15e158dbe148b1a27dd/264x264.jpg'
      }, {
        album_cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EdT-JgojXyySn7jvhOFWdL9AFJRMF6j9PpHB7ckY_w&s'
      }, {
        album_cover: 'https://i1.sndcdn.com/avatars-Z6DIEHtImUy7Tt2Q-S0fQvA-t240x240.jpg'
      }],
      events: [],
      news: []
    }
  },
})
</script>
