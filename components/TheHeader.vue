<template lang="pug">
header
  TheNav

  p Navigate through the application to see the magic
  p The user will likely visit
  no-ssr
    ul
      li(v-for="c, index in predictions" :key="index") {{ c }}

  div I used the statistics you already have to make this prediction.
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  components: { TheNav },

  computed: {
    predictions () {
      return this.$store.state.predictions
    }
  }
}
</script>
