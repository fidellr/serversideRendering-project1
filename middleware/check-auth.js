import Cookie from 'js-cookie'
import axios from 'axios'
import { getTokenFromCookie } from '~/utils/helpers'

export default function ({ store, isServer, req }) {
  const cookieId = Cookie.get('ID')
  const loggedUserToken = isServer ? getTokenFromCookie(req) : cookieId
  if (loggedUserToken) {
    store.commit('SET_tokenForID', loggedUserToken)
  }
}
