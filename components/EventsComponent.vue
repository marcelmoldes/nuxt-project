<template>

  <div class="upcoming-gigs-1">
    <div class="container px-0">
      <div class="spacer-150 spacer-md-120 spacer-sm-60"></div>
      <div class="section-title row gx-0">
        <div class="col-xl-6 col-md-6 col-12">
          <h4 class="text-anime">Upcoming Events</h4>
          <p class="body-three text-anime">Discover our events, concerts, meetings and more<br>
          </p>
        </div>
        <div class="col-xl-6 col-md-6 col-12 right-area">
          <div class="link-outer fade-right">
           <NuxtLink to="/events">
             <a class="link-with-arrow text-red-800 text-lg font-bold"><span
                 data-hover="View all">View all</span></a>
           </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer-60 bg-white spacer-md-15"></div>
    <div class="gigs ">
      <div v-for="event in events" :key="event" id="movement"  class="border-red-800  border mt-2 container px-20 cursor-pointer  shadow shadow-sky-50  rounded-md">
       <ul class="">
          <li class="row gx-0 fade-in">
            <div class="col-xl-3 col-md-3 col-12 list-area">
              <div class="left-area"><span class="date">{{ event.attributes.event_date }}</span><span
                  class="city">{{ event.attributes.name }}</span></div>
            </div>
            <div class="col-xl-4 col-md-4 col-12 list-area"><span class="location"><i class="fas fa-map-marker-alt"></i> {{
                event.attributes.location
              }}</span></div>
            <div class="col-xl-2 col-md-2 col-12 list-area"><span class="time"><i
                class="ri-time-line"></i>{{ format(`${event.attributes.event_date} ${event.attributes.event_time}`, "HH:mm") }}</span></div>
            <div class="col-xl-3 col-md-3 col-12 list-area">
                <a class="button-two" :href="`/events/${event.id}`">
                  <div class="button-wrapper">
                <span data-hover="See more">See more</span>
              </div>
            </a>
              </div>
          </li>
        </ul>

      </div>
    </div>
  </div>

</template>

<script>
import { format } from 'date-fns';

export default defineNuxtComponent({
  methods: {
    format,
  },
  props: ['events']
})
</script>
<style>
#movement {
  transition: transform 1s ease;
}
#movement:hover {
  transform: translateX(20px);
}

</style>