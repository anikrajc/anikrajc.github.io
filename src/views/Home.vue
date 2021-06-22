<template>
  <v-sheet color="surface" class="page">
    <center-content class="pa-4 mt-10">
      <div class="text-center">
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
      </div>
      <div class="mt-15">
        <div class="text-h6 text-align-left ml-2">Apps</div>
        <app-grid>
          <app-tile
            platform="android"
            :logo="require('@/assets/ic_remote.webp')"
            title="Remote for PT"
            description="Pick shows from the remote browser and play it on the big screen"
            meta="100,000+ installs"
            link="https://play.google.com/store/apps/details?id=com.anikrajc.remote"
          />
          <app-tile
            platform="android"
            :logo="require('@/assets/ic_calc.webp')"
            title="Cal - The Calculator"
            description="Hot reloaded and intuitive calculations"
            meta="Closed Beta"
            link="https://play.google.com/store/apps/details?id=com.anikrajc.calculator"
          />
        </app-grid>
      </div>
    </center-content>
  </v-sheet>
</template>
<script>
import CenterContent from "@/components/CenterContent.vue";
import AvatarLink from "@/components/AvatarLink.vue";
import MeetingButton from "@/components/MeetingButton.vue";
import AppGrid from "@/components/AppGrid.vue";
import AppTile from "@/components/AppTile.vue";
export default {
  components: { MeetingButton, AvatarLink, CenterContent, AppTile, AppGrid },
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
