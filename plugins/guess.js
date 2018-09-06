import { guess } from 'guess-webpack/api'

let predictions = []
predictions = Object.keys(guess()).sort((a, b) => a.length - b.length)

export default ({ app: { router, store } }) =>  {

  router.afterEach(to => {

    predictions.forEach(p => {
      console.log(p)
      // TypeError: router.prefetch is not a function
      router.prefetch(p)
    })
    store.commit('setPredictions', predictions)
  })
}
