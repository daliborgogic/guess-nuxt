<template lang="pug">
.container
  TheHeader
  nuxt
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
  components: { TheHeader }
}
</script>

<style lang="stylus">
*
*::before
*::after
  box-sizing border-box

html
  font-family sans-serif
  line-height 1.15
  -webkit-text-size-adjust 100%
  -ms-text-size-adjust 100%
  -ms-overflow-style scrollbar
  -webkit-tap-highlight-color transparent

@-ms-viewport
  width device-width

body
  margin 0
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 1rem
  font-weight 400
  line-height 1.4
  color black
  text-align left
  background-color white
.container
  max-width 512px
  margin 0 auto

p
  margin-top 0

::selection
  background-color #79ffe1
  color #000
</style>
