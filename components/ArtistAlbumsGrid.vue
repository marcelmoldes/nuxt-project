<template>
  <div>
    <div class="spacer-120 spacer-md-90 spacer-sm-30"></div>
    <div class="discography-page">
      <div class="container px-4">
        <h4 class="m-5">Albums of {{artist.name}}</h4>
        <div class="row g-4 g-md-5">
          <a v-for="album of artist.albums.data" :key="album" :href="`/albums/${album.id}`"
             class="col-xl-4 col-lg-4 col-md-4 col-6 one-album">
            <p v-if="album <= 0">no tiene albums</p>
            <div v-else class="image-anime">
              <img :src="'http://api.basicocrm.com:1337' + album.attributes.cover_album.data[0].attributes.url"
                   class="ml-52"
                   width=""/>
            </div>
            <div class="discography-infos align-center">
              <h6 class="">{{ album.attributes.name }}</h6>
            </div>
          </a>
           <h7 class="m-6" v-if="artist.albums.data <= 0">{{artist.name}} dont have albums</h7>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  props: ['artist']
})
</script>