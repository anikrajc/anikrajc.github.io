<template>
  <v-btn
    elevation="2"
    color="primary"
    class="mx-2"
    fab
    :href="href"
    target="_blank"
    referrerpolicy="no-referrer"
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>
<script>
export default {
  props: ["icon", "href"],
};
</script>
