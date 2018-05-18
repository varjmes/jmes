const withManifest = require("next-manifest")
const withWorkbox = require("next-workbox")

module.exports = withWorkbox(
  withManifest({
    manifest: {
      icons: {}
    }
  })
)
