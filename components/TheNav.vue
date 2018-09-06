<template lang="pug">
nav
  nuxt-link(to="/") HOME
  nuxt-link(to="/example") EXAMPLE
  nuxt-link(to="/about") ABOUT
</template>

<style lang="stylus" scoped>
nav
  height 64px
  display flex
  align-items center
a
  font-size 14px
  color #999
  text-decoration none
  margin-right 1rem
  &:last-child
    margin-right 0
  &:hover
    color #000
.nuxt-link-exact-active
  color #000
// .nuxt-link-active
</style>
