<template>
  <div>
    <div v-if="!images || images.length === 0">
      <v-progress-circular
      :width="4"
      color="green"
      indeterminate
    ></v-progress-circular>
    </div>
    <v-container fluid grid-list-xl pb-0 grid-list-lg grid-list-md grid-list-xs v-if="images">
      <v-layout row wrap>
        <v-flex v-for="image in images" :key="image.id" class="xs12 sm3 md4 xl4">
          <v-card flat>
            <v-row>
              <v-col>
                <v-img
                  class="secondaryFont--text"
                  height="100"
                  width="100"
                  :src="image.urlImage"
                  alt
                ></v-img>
              </v-col>
              <v-col>{{getDateTimeFromUrl(image.urlImage)}}</v-col>
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { ImageService } from "../service/service-provider";

export default {
  data() {
    return {
      images: []
    };
  },
  mounted() {
    this.loadImages();
  },
  methods: {
    getDateTimeFromUrl(url) {
      let index = url.indexOf(".jpg");
      return url.substring(index - 16, index);
    },
    loadImages() {
      ImageService.getAllImage(
        res => {
          if (res && res.length > 0) {
            res.forEach(item => {
              this.images.push({
                id: item.id,
                urlImage: item.urlImage,
                deviceCode: item.deviceCode
              });
            });
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style>
</style>