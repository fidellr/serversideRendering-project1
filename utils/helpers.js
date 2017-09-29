import Cookie from 'js-cookie'
export const getTokenFromCookie = (req) => {
  if (!req.headers.cookie) return null
  const idCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('ID='))
  if (!idCookie) return null
  const ID = idCookie.split('=')[1]
  return ID
}