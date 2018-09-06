import { guess } from 'guess-webpack/api'
// import store from '@/store'

let predictions = []
predictions = Object.keys(guess()).sort((a, b) => a.length - b.length)

export default ({ app }) =>  {
  app.router.onReady(() => {
    app.router.afterEach(to => {

      predictions.forEach(p => {
        // app.router.prefetch(p)
        console.log(p)
      })
    })
    // store.commit('setPredictions', predictions)
  })
}
