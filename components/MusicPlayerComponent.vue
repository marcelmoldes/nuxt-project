<template>
  <div>
    <div class="music-player">
      <div class="container">
        <div class="spacer-120 spacer-md-60"></div>
        <div class="fiddle-player fade-down">
          <div class="row gx-0">
            <div class="col-xl-4 col-lg-6">
              <div class="album-cover">
                <img class="album-art" data-amplitude-song-info="cover_art_url">

              </div>
            </div>
            <div class="col-xl-8 col-lg-6 col-md-12 player-right">
              <div class="playlist-header">
                <div class="left-area">
                  <span>Music Player</span>
                  <h6 class="album-name">Featured Songs</h6>
                </div>
                <div class="right-area">
                  <a href="#" class="buy-button">BUY ON ITUNES</a>
                </div>
              </div>
              <div class="play-list">
                <div class="list-song amplitude-play-pause amplitude-song-container" data-id="1" :data-title="song.attributes.name" data-album="Hands All Over" data-cover="/assets/images/album-cover-1.jpg" data-url="/assets/mp3/When%20We%20Shoot.mp3"  v-for="song in album.songs.data" :key="song"></div>
              </div>

              <div class="player-controls">
                <div id="progress progress-container">


                  <input type="range" class="amplitude-song-slider">
                  <progress id="song-played-progress" class="amplitude-song-played-progress" value="0.5499999981030104"></progress>
                  <progress id="song-buffered-progress" class="amplitude-buffered-progress" value="0.8165591712219394"></progress>
                </div>
                <div class="row">
                  <div class="col-xl-4 col-md-4 col-6 current-song">
                    <span>PLAYING</span>
                    <div class="song-title"></div>
                    <div class="song-title" data-amplitude-song-info="name"></div>
                  </div>
                  <div class="col-xl-4 col-md-4 col-12 controls">
                    <div class="prev amplitude-prev"><i class="ri-skip-back-fill"></i></div>
                    <div class="play-pause amplitude-play-pause"></div>
                    <div class="next amplitude-next"><i class="ri-skip-forward-fill"></i></div>
                  </div>
                  <div class="col-xl-4 col-md-4 col-6 time"><div class="playing-time"><span class="play-current-time"><span class="current-time"><span class="amplitude-current-minutes" ></span>:<span class="amplitude-current-seconds"></span></span></span><span class="brace">/</span><span class="play-total-time"><span class="amplitude-duration-minutes"></span>:<span class="amplitude-duration-seconds"></span></span></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default defineNuxtComponent({
  props: ['album']
})
</script>

<style lang="scss" scoped>

</style>