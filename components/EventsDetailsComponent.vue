<template>
  <div>
    <div class="single-event-hero">
      <div class="outer">
        <div class="inner">
          <div class="container px-md-0 px-4">
            <div class="row">
              <div class="col-xl-6">
                <div class="event-info">
                  <span class="info"><i class="ri-map-pin-range-line"></i>{{ event.location }}</span>
                  <div class="spacer-15"></div>
                  <h2>{{ event.name }}</h2>
                  <div class="spacer-15"></div>
                  <span class="info"><i class="ri-calendar-2-line"></i>{{ event.event_date }}</span><br>
                  <span class="info"><i class="ri-timer-2-line"></i>{{ event.event_time }}</span>
                  <div class="spacer-60"></div>
                  <a class="button-two" href="#">
                    <div class="button-wrapper"><span data-hover="Open in Map">Open in Map</span></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>


      </div>

    </div>
    <div class="single-event-content">
      <div class="container mt-5 px-md-0 px-4">
        <h4>About Event</h4>
        <div class="spacer-30"></div>
        <p class="body-two">{{ event.description[0].children[0].text }}</p>
        <div class="spacer-45"></div>
        <EventImagesGrid :event="event"></EventImagesGrid>
      </div>

    </div>
    <div id="map" class="m-5 p-5">
    </div>
  </div>
</template>
<script>
import {Loader} from "@googlemaps/js-api-loader"
import {setupCalendar, Calendar, DatePicker} from 'v-calendar';
import 'v-calendar/style.css';
import "mapkick/bundle"

export default defineNuxtComponent({
  props: ['event'],
  components: {
    setupCalendar, Calendar, DatePicker
  },
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyBIIfJM8bCLwFV54PwE5cY0EC0ZO8FfMa0",
      version: "weekly",
    });
    loader.load().then(async () => {
      const {Map} = await google.maps.importLibrary("maps");
      const {Marker} = await google.maps.importLibrary("marker");
      const map = new Map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        mapTypeId: "satellite",
      });

      const marker = new Marker({
        position: {lat: -25.363, lng: 131.044},
        map,
        title: 'Click to zoom'
      })
      window.setTimeout(() => {
        map.panTo(marker.getPosition());
      }, 3000);
      marker.addListener("mouseover", () => {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
      });
    });
      }
})
</script>

<style>
#map {
  height: 600px;
}
</style>