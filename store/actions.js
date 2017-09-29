import axios from 'axios'
import Cookie from 'js-cookie'
export default {
    addUser({ commit }, payload) {
        let newUser = {
            first_name: payload.first_name,
            last_name: payload.last_name,
            date_of_birth: payload.date_of_birth,
            username: payload.username,
            email: payload.email,
            password: payload.password,
            gender: payload.gender,
            role: payload.role
        }
        axios.post('https://ade-project1-001.herokuapp.com/v1/signup', newUser)
            .then((response) => {
                commit('ADD_USER', newUser)
                console.log(newUser)
            }).catch(err => console.log(err))
    },
    async loginGuru({ commit }, payload) {
        let userData = {
            username: payload.username,
            password: payload.password
        }
        const { data } = await axios.post('https://ade-project1-001.herokuapp.com/v1/signin', userData)
        if (data.data.role === 'Guru') {
            const idUser = data.data._id
            commit('SET_USER', data.data)
            commit('SET_tokenForID', idUser)
        } else if (data.data.role === 'Murid') {
            commit('SET_GuruAuthError')
        } else {
            commit('SET_GuruAuthError')
        }

    },
    async loginMurid({ commit }, payload) {
        let userData = {
            username: payload.username,
            password: payload.password
        }
        const { data } = await axios.post('https://ade-project1-001.herokuapp.com/v1/signin', userData)
        if (data.data.role === 'Murid') {
            const idUser = data.data._id
            commit('SET_tokenForID', idUser)
            commit('SET_USER', data.data)
            commit('LOGIN_SUCCESS')

        } else if (data.data.role === 'Guru') {
            commit('SET_MuridAuthError')
        } else {
            commit('SET_MuridAuthError')
        }

    },
    logout({ commit }) {
        commit('LOGOUT')
    }

}