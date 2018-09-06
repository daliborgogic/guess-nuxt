<template lang="pug">
div
  p Here's how you can configure Guess.js:
  pre.
    new GuessPlugin({
     // GA view ID.
     GA: GAViewID,
     // Hints Guess to not perform pre-fetching and delegate this logic to
     // its consumer.
     runtime: { delegate: true },
     // Since Gatsby already has the required metadata for pre-fetching,
     // Guess does not have to collect the routes and the corresponding
     // bundle entry points.
     routeProvider: false,
     // Optional argument. It takes the data for the last year if not
     // specified.
     period: period ? period : undefined,
    })
</template>

<style lang="stylus" scoped>
pre
  color #d400ff
  font-family Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif
  font-size 0.75rem
  white-space pre-wrap
</style>
