<template lang="pug">
nav
  nuxt-link(to="/") HOME
  nuxt-link(to="/help") HELP
  nuxt-link(to="/pgp") PGP
</template>

<style lang="stylus" scoped>
nav
  height 64px
  display flex
  align-items center
a
  font-size 13px
  color #999
  text-decoration none
  margin-right 1rem
  &:last-child
    margin-right 0
  &:hover
    color #000
.nuxt-link-exact-active
  color #000
</style>
