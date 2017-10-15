import Cookie from 'js-cookie'
import axios from 'axios'
import { getTokenFromCookie } from '~/utils/helpers'

export default async function ({ store, isServer, req }) {
  const cookieToken = Cookie.get('token')
  const loggedUserToken = isServer ? getTokenFromCookie(req) : cookieToken
  if (loggedUserToken) {
    store.commit('SET_TOKEN', loggedUserToken)
    if (store.state.user) {
      store.commit('SET_USER', store.state.user)
    } else {
      const { data } = await axios(`https://ade-project1-001.herokuapp.com/v1/users/data/${loggedUserToken}`)
      store.commit('SET_USER', data)
    }
  }
}
