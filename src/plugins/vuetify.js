import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#307bff",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#f5073b",
        info: "#6c757d",
        success: "#31a744",
        warning: "#f9c10b",
        surface: "#ffffff",
      },
      dark: {
        primary: "#307bff",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#f5073b",
        info: "#6c757d",
        success: "#31a744",
        warning: "#f9c10b",
        surface: "#171625",
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
