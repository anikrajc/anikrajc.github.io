<template>
  <v-sheet color="surface" class="page">
    <center-content class="pa-4 mt-10">
      <div class="text-center">
        <v-avatar size="128">
          <img src="@/assets/dp.jpg" alt="Anik C" />
        </v-avatar>
        <div class="text-h4 font-weight-medium mt-4">Anik Raj C</div>

        <div class="mt-2">
          Engineering @
          <a
            class="warning--text text-decoration-none"
            target="_blank"
            referrerpolicy="no-referrer"
            href="https://www.swiggy.com/"
          >
            Swiggy
          </a>
          <br />Android Nanodegree @
          <a
            class="warning--text text-decoration-none"
            target="_blank"
            referrerpolicy="no-referrer"
            href="https://udacity.com"
          >
            Udacity
          </a>
        </div>

        <div class="mt-8">
          <avatar-link
            icon="fab fa-twitter"
            href="https://twitter.com/anikrajc"
          />
          <AvatarLinkSVG
            :icon="require('@/assets/ic_gh.svg')"
            href="https://github.com/anikrajc"
          />
          <avatar-link
            icon="fab fa-linkedin-in"
            href="http://in.linkedin.com/in/anikrajc"
          />
        </div>
      </div>
      <div class="mt-15" v-if="recentPosts && recentPosts.length != 0">
        <div class="text-h6 text-align-left ml-2">Recent posts</div>
        <app-grid>
          <recent-post
            v-for="(item, index) in recentPosts"
            :key="index"
            :item="item"
          />
        </app-grid>
      </div>
      <div class="mt-15">
        <div class="text-h6 text-align-left ml-2">Weekend projects</div>
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
import AvatarLinkSVG from "@/components/AvatarLinkSVG.vue";
import AppGrid from "@/components/AppGrid.vue";
import AppTile from "@/components/AppTile.vue";
import RecentPost from "@/components/RecentPost.vue";

export default {
  components: {
    AvatarLink,
    AvatarLinkSVG,
    CenterContent,
    AppTile,
    AppGrid,
    RecentPost,
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    recentPosts: [],
  }),
  mounted() {
    this.loadRssFiles();
  },
  methods: {
    loadRssFiles() {
      fetch(this.publicPath + "feeds/medium.json")
        .then((response) => response.json())
        .then((json) => {
          this.recentPosts = json.items;
        });
    },
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
