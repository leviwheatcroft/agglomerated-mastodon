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
  }
}
