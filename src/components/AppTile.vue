<template>
  <v-col cols="12" sm="6">
    <v-card
      class="pa-2 rounded-lg ma-2"
      style="background: rgba(0, 0, 0, 0.2)"
      elevation="2"
      outlined
    >
      <v-icon
        style="float: right"
        size="30"
        color="success"
        v-if="platform == 'android'"
      >
        fab fa-android
      </v-icon>
      <v-icon
        style="float: right"
        size="20"
        color="primary"
        v-if="platform == 'web'"
      >
        fas fa-code
      </v-icon>
      <v-list-item three-line>
        <v-list-item-avatar tile size="60">
          <v-img class="rounded-lg" :src="logo" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="mt-4">
        <div class="info--text text-body-2">{{ meta }}</div>
        <v-spacer></v-spacer>
        <v-btn outlined text rounded v-if="link" :href="link" target="_blank">
          Open <v-icon size="15" right>fas fa-external-link-alt</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: ["platform", "title", "description", "meta", "link", "logo"],
};
</script>
