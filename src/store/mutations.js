export default {
  addCounter(state, payload) {
    payload.count+=1
  },
  addTocar(state, payload) {
    payload.ischecked = true
    state.carList.push(payload)
  },

}
