export default function ({ app, store, route, params, error, redirect, hotReload }) {
  if (!store.getters.GuruIsAuthenticated || !store.getters.MuridIsAuthenticated) {
    console.log('u have not sign in yet!')
    return redirect('/')
  }
}
// ini buat di halaman user (teachers or students)
// jika isAuthenticated false maka akan di redirect ke halaman index/home