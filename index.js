export default {
  install (app, options) {
    this.options = options
    app.config.sources = app.config.sources || []
    app.config.sources.push(this)
    // app.$data.sources.push(this)
  },
  async more () {
    const { host, id } = this.options.mastodon
    const res = await fetch(`${host}/api/v1/accounts/${id}/statuses`)
    const items = await res.json()
    this.$data.blocks.push(items)
  }
}
