<template>
  <v-sheet color="surface" class="page">
    <center-content class="pa-4 mt-10 text-center">
      <v-avatar size="128">
        <img src="@/assets/dp.jpg" alt="Anik C" />
      </v-avatar>
      <div class="text-h4 font-weight-medium mt-4" @click="toggleDarkMode">
        Anik Raj C
      </div>
      <div class="mt-4">
        <avatar-link
          icon="fab fa-twitter"
          href="https://twitter.com/anikrajc"
        />
        <avatar-link
          icon="fab fa-github-alt"
          href="https://github.com/anikraj1994"
        />
        <avatar-link
          icon="fab fa-linkedin-in"
          href="http://in.linkedin.com/in/anikrajc"
        />
      </div>
      <div class="mt-4">
        Software Engineering Lead @
        <a
          class="warning--text text-decoration-none"
          target="_blank"
          referrerpolicy="no-referrer"
          href="https://mobishaala.com"
        >
          Mobishaala
        </a>
        <br />Android Nanodegree graduate @
        <a
          class="warning--text text-decoration-none"
          target="_blank"
          referrerpolicy="no-referrer"
          href="https://udacity.com"
        >
          Udacity
        </a>
      </div>
      <meeting-button> Let's Talk </meeting-button>
    </center-content>
  </v-sheet>
</template>
<script>
import CenterContent from "@/components/CenterContent.vue";
import AvatarLink from "@/components/AvatarLink.vue";
import MeetingButton from "@/components/MeetingButton.vue";
export default {
  components: { MeetingButton, AvatarLink, CenterContent },
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      const body = document.getElementsByTagName("body")[0];
      body.className = this.$vuetify.theme.dark ? "dark" : "light";
      localStorage.setItem("theme", this.$vuetify.theme.dark);
      location.reload();
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  min-height: 100vh;
}
.primary-text-bg {
  background: rgba(48, 175, 255, 0.05);
}
</style>
