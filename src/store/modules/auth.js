import router from '@/router'

const getDefaultState = () => {
	return {
		token: localStorage.getItem('access_token') || null,
        user: JSON.parse(localStorage.getItem('user')) || null
	}
}

const state = getDefaultState()

const getters = {
	loggedIn(state) {
        return state.token !== null
    },
    user(state) {
        return state.user
    }
}

const actions = {
    retrieveToken(context, {email, password}) {
        const createToken = email+password
        const newUser = {
            id: 1,
            name: 'Kevin Brito',
            email: email
        }
        localStorage.setItem('access_token', createToken)
        localStorage.setItem('user', JSON.stringify(newUser))
        context.commit('RETRIEVE_TOKEN', {token: createToken, user: newUser})
        context.dispatch('setAlertLogoutTime')
    },
    destroyToken(context) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        context.commit('DESTROY_TOKEN')
    },
    setAlertLogoutTime(context) {
        setTimeout(() => {
            alert("Se agota el tiempo, te queda 1 minuto")
            context.dispatch('setLogoutTime')
        }, (4 * 60000));
    },
    setLogoutTime(context) {
        setTimeout(() => {
            alert("Se te acabó el tiempo de la sesión")
            context.dispatch('destroyToken')
            router.push('/')
        }, 60000);
    }
}

const mutations = {
	RETRIEVE_TOKEN(state, data) {
        state.token = data.token
        state.user = data.user
    },
    DESTROY_TOKEN(state) {
        state.token = null
        state.user = null
    },
    SET_USER(state, data) {
        state.user = data
    }
}

export default {
	namespaced: false,
	state,
	getters,
	actions,
	mutations
}