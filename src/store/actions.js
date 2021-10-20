export default {
  addCar(context, payload) {
    // 1 判断数组中是否有该商品，有的话将该商品赋值给oldproduct，否则的话oldproduct为null
    let oldproduct = context.state.carList.find(item => item.iid === payload.iid)
    // 2 如果有商品，将该商品数量加一，否则的话，将该商品添加到数组中
    if (oldproduct) {
      context.commit('addCounter', oldproduct)
    } else {
      payload.count = 1
      context.commit('addTocar', payload)
    }
  }
}
