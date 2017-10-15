import Cookie from 'js-cookie'
export default {
    toggleSidebar(state) {
        state.sidebar = !state.sidebar;
    },
    ADD_USER(state, payload) {
        state.users = payload
    },
    SET_TOKEN(state, token) {
        state.token = token || null
        if (process.browser) {
            Cookie.set('token', token)
        }
    },
    SET_LOADCATEGORIES(state, payload) {
        state.kategoriHome = payload
    },
    SET_GuruAuthError(state) {
        state.snackbarWrongRoleGuru = true
    },
    SET_MuridAuthError(state) {
        state.snackbarWrongRoleMurid = true
    },
    SET_USER(state, user) {
        state.loading = true
        state.user = user || null
    },
    LOGIN_SUCCESS(state) {
        state.loading = false
    },
    LOGOUT(state) {
        state.token = null
        state.user = null
        if (process.browser) {
            Cookie.remove('token')

        }
    }
    // if (state.user.role === 'Guru') {
    //     console.log(`user role = ${state.user.role}`)
    //     getters.MuridIsAuthenticated = false
    //     getters.GuruIsAuthenticated = true
    // } else if (state.user.role === 'Murid') {
    //     console.log(`user role = ${state.user.role}`)
    //     getters.GuruIsAuthenticated = false
    //     getters.MuridIsAuthenticated = true
    // }
}