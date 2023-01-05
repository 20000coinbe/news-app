import { fetchAsksList, fetchCommentItem, fetchJobsList, fetchList, fetchNewsList, fetchUserInfo } from "@/apis"

export default {
  // FETCH_NEWS({ commit }, payload) {
  //   fetchNewsList()
  //     .then(res => {
  //       console.log(res)
  //       commit('SET_NEWS', res.data)
  //       return res
  //     })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // },
  // FETCH_JOBS({ commit }, payload) {
  //   fetchJobsList()
  //     .then(res => {
  //       console.log(res)
  //       commit('SET_JOB', res.data)
  //     })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // },
  // FETCH_ASKS({ commit }, payload) {
  //   fetchAsksList()
  //     .then(res => {
  //       console.log(res)
  //       commit('SET_ASK', res.data)
  //     })
  //     .catch(err => {
  //       console.log(err.message)
  //     })
  // },

  async FETCH_USER({ commit }, payload) {
    const { username } = payload
    await fetchUserInfo(username)
      .then(res => {
        console.log(res.data)
        commit('SET_USER', res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(err => {
        console.log(err.message)
      })
  },

  FETCH_LIST({ commit }, payload) {
    const { pageName } = payload
    return fetchList(pageName)
      .then(res => {
        console.log(res.data)
        commit('SET_LIST', res.data)
        return res
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}