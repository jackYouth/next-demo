const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/p/481": { page: "/post", query: { id: 481 } },
      "/p/975": { page: "/post", query: { id: 975 } }
    };
  },
  webpack: function(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }

    return config;
  }
};
