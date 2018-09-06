<template lang="pug">
header
  TheNav

  p Navigate through the application to see the magic
  p The user will likely visit
  ul
    li(v-for="c, index in predictions" :key="index") {{ c }}

  div I used the statistics you already have to make this prediction.
</template>

<script>
import { guess } from 'guess-webpack/api'
import TheNav from '@/components/TheNav'

export default {
  components: { TheNav },

  data () {
    return {
      predictions: []
    }
  },

  mounted () {
    if (typeof window !== 'undefined') {
      console.log(typeof window !== 'undefined')
      let predictions = []

      predictions = Object.keys(guess()).sort((a, b) => a.length - b.length)
      predictions.forEach(p => this.$route.prefetch(p))

      this.predictions = predictions
    }
  }
}
</script>
