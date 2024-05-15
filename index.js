import MastodonRenderer from './MastodonRenderer.vue'
export default {
  init (options) {
    this.options = options
  },
  async fetch () {
    const { host, id } = this.options
    const res = await fetch(`${host}/api/v1/accounts/${id}/statuses`)
    const items = await res.json()
    console.log(items)
    return items
  },
  render (item) {
    if (item.source === 'mastodon') {
      return MastodonRenderer
    }
  }
}
