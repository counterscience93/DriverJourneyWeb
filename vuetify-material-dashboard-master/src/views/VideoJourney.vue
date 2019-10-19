<template>
  <div>
    <v-col cols="12" sm="6" md="6">
      <v-text-field label="Device IMEI" v-model="textField" @change="onChangeTextField()"></v-text-field>
    </v-col>
    <v-data-table :headers="headers" :items="desserts" :items-per-page="10" class="elevation-1">
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item.url)">View</v-icon>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <video-player
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
      ></video-player>
      <v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// require styles
import 'video.js/dist/video-js.css';

import { videoPlayer } from 'vue-video-player';

export default {
  data() {
    return {
      textField: '',
      dialog: false,
      playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src:
              'https://s3-hcm-r1.longvan.net/safety.drive.storage/352142102458936/video/2019-10-15.avi'
          }
        ]
      },
      headers: [
        { text: 'Id', value: 'id' },
        {
          text: 'Device IMEI',
          align: 'left',
          sortable: false,
          value: 'imei'
        },
        { text: 'Url', value: 'url' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      desserts: [
        {
          id: '1',
          imei: '352142102458936',
          url:
            'https://s3-hcm-r1.longvan.net/safety.drive.storage/352142102458936/video/2019-10-15.avi'
        },
        {
          id: '2',
          imei: '352142102458936',
          url:
            'https://s3-hcm-r1.longvan.net/safety.drive.storage/352142102458936/video/2019-10-15.avi'
        }
      ]
    };
  },
  components: {
    videoPlayer
  },
  created() {
    console.log('This Vue is created');
  },
  methods: {
    onChangeTextField() {
      console.log(this.textField);
    },
    editItem(url) {
      console.log(url);
      this.dialog = true;
    }
  }
};
</script>

<style scoped>
.vjs-custom-skin > .video-js {
  width: 100%;
  font-family: 'PingFang SC', 'Helvetica Neue', 'Hiragino Sans GB', 'Segoe UI',
    'Microsoft YaHei', '微软雅黑', sans-serif;
}

.vjs-custom-skin > .video-js .vjs-menu-button-inline.vjs-slider-active,
.vjs-custom-skin > .video-js .vjs-menu-button-inline:focus,
.vjs-custom-skin > .video-js .vjs-menu-button-inline:hover,
.video-js.vjs-no-flex .vjs-menu-button-inline {
  width: 10em;
}

.vjs-custom-skin > .video-js .vjs-controls-disabled .vjs-big-play-button {
  display: none !important;
}

.vjs-custom-skin > .video-js .vjs-control {
  width: 3em;
}

.vjs-custom-skin > .video-js .vjs-control.vjs-live-control {
  width: auto;
  padding-left: 0.5em;
  letter-spacing: 0.1em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-inline:before {
  width: 1.5em;
}

.vjs-menu-button-inline .vjs-menu {
  left: 3em;
}

.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button,
.video-js.vjs-ended .vjs-big-play-button,
.video-js.vjs-paused .vjs-big-play-button {
  display: block;
}

.vjs-custom-skin > .video-js .vjs-load-progress div,
.vjs-seeking .vjs-big-play-button,
.vjs-waiting .vjs-big-play-button {
  display: none !important;
}

.vjs-custom-skin > .video-js .vjs-mouse-display:after,
.vjs-custom-skin > .video-js .vjs-play-progress:after {
  padding: 0 0.4em 0.3em;
}

.video-js.vjs-ended .vjs-loading-spinner {
  display: none;
}

.video-js.vjs-ended .vjs-big-play-button {
  display: block !important;
}

.video-js.vjs-ended .vjs-big-play-button,
.video-js.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button {
  display: block;
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-left: -1.5em;
  margin-top: -1em;
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  background-color: rgba(0, 0, 0, 0.45);
  font-size: 3.5em;
  /*border-radius: 50%;*/
  height: 2em !important;
  line-height: 2em !important;
  margin-top: -1em !important;
}

.video-js:hover .vjs-big-play-button,
.vjs-custom-skin > .video-js .vjs-big-play-button:focus,
.vjs-custom-skin > .video-js .vjs-big-play-button:active {
  background-color: rgba(36, 131, 213, 0.9);
}

.vjs-custom-skin > .video-js .vjs-loading-spinner {
  border-color: rgba(36, 131, 213, 0.8);
}

.vjs-custom-skin > .video-js .vjs-control-bar2 {
  background-color: #000000;
}

.vjs-custom-skin > .video-js .vjs-control-bar {
  /*background-color: rgba(0,0,0,0.3) !important;*/
  color: #ffffff;
  font-size: 14px;
}

.vjs-custom-skin > .video-js .vjs-play-progress,
.vjs-custom-skin > .video-js .vjs-volume-level {
  background-color: #2483d5;
}

.vjs-custom-skin > .video-js .vjs-play-progress:before {
  top: -0.3em;
}

.vjs-custom-skin > .video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: 1.3em;
}

.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
  left: 0em;
}

.vjs-custom-skin > .video-js .vjs-menu li {
  padding: 0;
  line-height: 2em;
  font-size: 1.1em;
  font-family: 'PingFang SC', 'Helvetica Neue', 'Hiragino Sans GB', 'Segoe UI',
    'Microsoft YaHei', '微软雅黑', sans-serif;
}

.vjs-custom-skin > .video-js .vjs-time-tooltip,
.vjs-custom-skin > .video-js .vjs-mouse-display:after,
.vjs-custom-skin > .video-js .vjs-play-progress:after {
  border-radius: 0;
  font-size: 1em;
  padding: 0;
  width: 3em;
  height: 1.5em;
  line-height: 1.5em;
  top: -3em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-popup .vjs-menu {
  width: 5em;
  left: -1em;
}

.vjs-custom-skin
  > .video-js
  .vjs-menu-button-popup.vjs-volume-menu-button-vertical
  .vjs-menu {
  left: 0;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-menu {
  order: 4;
}

/*排序顺序*/
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-play-control {
  order: 0;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-time-control {
  min-width: 1em;
  padding: 0;
  margin: 0 0.1em;
  text-align: center;
  display: block;
  order: 1;
}

.vjs-custom-skin
  > .video-js
  .vjs-control-bar
  .vjs-playback-rate
  .vjs-playback-rate-value {
  font-size: 1.2em;
  line-height: 2.4;
}

.vjs-custom-skin > .video-js .vjs-progress-control.vjs-control {
  order: 2;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-volume-menu-button {
  order: 3;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button {
  order: 4;
}

.vjs-custom-skin
  > .video-js
  .vjs-control-bar
  .vjs-resolution-button
  .vjs-resolution-button-label {
  display: block;
  line-height: 3em;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate {
  order: 5;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-fullscreen-control {
  order: 6;
}
</style>
