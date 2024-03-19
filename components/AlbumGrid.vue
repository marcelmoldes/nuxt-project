<template>
  <div>
    <div class="spacer-120 spacer-md-90 spacer-sm-30"></div>
    <div class="discography-page">
      <div class="container px-4">
        <div class="row g-4 g-md-5">
          <a href="#" class="col-xl-4 col-lg-4 col-md-4 col-6 one-album" v-for="album of albums" :key="album">
            <div class="image-anime">
              <img :src="'http://3.85.124.220:1337' + album.attributes.image.data[0].attributes.url"
                   class="ml-52"
                   width="" />
            </div>
            <div class="discography-infos align-center">
              <h6 class="text-anime">{{ album.attributes.name }}</h6>
              <span class="text-anime">{{ album.attributes.album_date }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  props: ['albums']
})
</script>