<template>
  <div>
    <div class="page-caption-2">
      <div class="caption-content">
        <div class="container">
          <h3 class="orange-gradient">All Events</h3>
          <p class="body-three">{{ title}}</p>
        </div>
      </div>

    </div>
    <div class="upcoming-gigs-1 orange">
      <div class="spacer-150 spacer-md-90 spacer-md-60"></div>
      <div class="spacer-60"></div>
      <div class="gigs">
        <div v-for="event in events" :key="event" class="container">

            <ul>
              <li class="row gx-0">
                <div class="col-xl-3 col-md-3 col-5 list-area">
                  <div class="left-area"><span class="date">{{ event.attributes.event_date }}</span><span class="city">{{
                      event.attributes.name
                    }}</span></div>
                </div>
                <div class="col-xl-4 col-md-4 col-7 list-area"><span class="location"><i
                    class="fas fa-map-marker-alt"></i>{{ event.attributes.location }}</span> <span
                    class="time mobile"><i class="ri-time-line"></i>{{ event.attributes.event_time }}</span></div>
                <div class="col-xl-2  col-md-2 d-none d-md-block list-area"><span
                    class="time">{{ format(`${event.attributes.event_date} ${event.attributes.event_time}`, "HH:mm") }}<i class="ri-time-line"></i></span></div>
                <div class="col-xl-3 col-md-3 col-12 list-area">
                  <a class="button-two" :href="`/events/${event.id}`">
                  <div class="button-wrapper"><span data-hover="See more">See more</span></div>
                </a></div>

              </li>
            </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {format} from "date-fns";

import formatters from "@/helpers/formatters.js";

export default defineNuxtComponent({
  props: ['events', 'title'],
  computed: {
    formatters() {
      return formatters
    },

  },
  methods: {
    format,
  },

})
</script>
