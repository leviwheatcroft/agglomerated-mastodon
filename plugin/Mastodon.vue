<script>
export default {
  props: {
    item: {
      type: Object,
      default () { return {} }
    }
  }
}
</script>
<template>
.item
  = {{ Object.keys(item) }}
</template>