module.exports = {
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },

  transpileDependencies: ["vuetify"],
};
