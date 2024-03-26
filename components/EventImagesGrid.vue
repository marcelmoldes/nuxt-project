<template>
  <div>
    <div class="spacer-120 spacer-md-90 spacer-sm-30"></div>

    <div class="discography-page">
      <h4 class="text-md m-4">Event Images</h4>
      <div class="container px-4">
        <div class="row g-4 g-md-5">
          <a   v-for="images in event.images.data" :key="images"
             class="col-xl-4 col-lg-4 col-md-4 col-6 one-album">
            <div class="image-anime">
              <img :src="'http://api.basicocrm.com:1337' + images.attributes.url"
                   width=""/>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  props: ['event']
})
</script>