<template>
  <div>
    <div class="single-event-hero">
      <div class="outer">
        <div class="inner">
          <div class="container px-md-0 px-4">
            <div class="row">
              <div class="col-xl-6">
                <div class="event-info">
                  <span class="info"><i class="ri-map-pin-range-line"></i>{{event.location}}</span>
                  <div class="spacer-15"></div>
                  <h2>{{ event.name}} </h2>
                  <div class="spacer-15"></div>
                  <span class="info"><i class="ri-calendar-2-line"></i>{{event.event_date}}</span><br>
                  <span class="info"><i class="ri-timer-2-line"></i>{{event.event_time}}</span>
                  <div class="spacer-60"></div>
                  <a href="#" class="button-two"><div class="button-wrapper"><span data-hover="Open in Map">Open in Map</span></div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="image"></div>
    </div>

    <div class="single-event-content">
      <div class="container px-md-0 px-4">
        <h4>A Symphony of Sound</h4>
        <div class="spacer-30"></div>
        <p class="body-two">The Viennese Strathale Festival is a one-of-a-kind event that brings together music lovers from around the world for a weekend of live performances by some of the biggest names in classical and traditional music. Set against the stunning backdrop of Vienna, the festival promises to be a truly unforgettable experience. From the world-renowned Vienna Philharmonic Orchestra to local folk musicians, there is something for everyone at the Viennese Strathale Festival. So come join us in the heart of Europe and immerse yourself in the rich cultural heritage of Vienna, while enjoying a memorable and entertaining weekend of music and celebration.
          <br><br>
          The festival will take place over the course of three days and will feature a diverse lineup of musical acts, including orchestral performances, solo concerts, and traditional folk music. In addition to the main stage events, there will be a variety of food and drink vendors, offering traditional Austrian cuisine and local beverages. Whether you are a classical music aficionado or simply looking to enjoy a weekend filled with music, art, and culture, the Viennese Strathale Festival is the perfect destination for you. With its stunning architecture, rich cultural history, and beautiful parks and gardens, Vienna is the perfect setting for this festival and promises to provide a truly unforgettable experience for all who attend.</p>
        <div class="spacer-60"></div>

      </div>
    </div>

  </div>
</template>
<script>
export default defineNuxtComponent({
  props: ['event'],
})
</script>

<style scoped>

</style>