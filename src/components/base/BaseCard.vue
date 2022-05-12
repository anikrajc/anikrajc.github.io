<template>
  <v-card
    :href="link"
    target="_blank"
    class="pa-2 rounded-lg ma-2"
    style="background: rgba(0, 0, 0, 0.2)"
    elevation="4"
    outlined
  >
    <slot></slot>
  </v-card>
</template>
<script>
export default {
  props: ["link"],
};
</script>
