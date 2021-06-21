<template>
  <v-app class="list-holder">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$vuetify.theme.dark =
      (localStorage.getItem("theme") || "true") == "true";
    const body = document.getElementsByTagName("body")[0];
    body.className = this.$vuetify.theme.dark ? "dark" : "light";
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body.light::-webkit-scrollbar {
  width: 15px;
}

body.light::-webkit-scrollbar-track {
  background: var(--v-surface-base);
  border-left: 1px solid var(--v-surface-base);
}

body.light::-webkit-scrollbar-thumb {
  background: var(--v-surface-darken2);
  border: solid 3px var(--v-surface-base);
  border-radius: 7px;
}

body.light::-webkit-scrollbar-thumb:hover {
  background: var(--v-surface-darken3);
}

body.dark::-webkit-scrollbar {
  width: 15px;
}

body.dark::-webkit-scrollbar-track {
  background: var(--v-surface-base);
  border-left: 1px solid var(--v-surface-base);
}

body.dark::-webkit-scrollbar-thumb {
  background: var(--v-surface-lighten1);
  border: solid 3px var(--v-surface-base);
  border-radius: 7px;
}

body.dark::-webkit-scrollbar-thumb:hover {
  background: var(--v-surface-lighten2);
}
</style>
