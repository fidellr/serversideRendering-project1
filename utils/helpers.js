import Cookie from 'js-cookie'
export const getTokenFromCookie = (req) => {
  if (!req.headers.cookie) return null
  const token = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
  if (!token) return null
  const ID = token.split('=')[1]
  return ID
}