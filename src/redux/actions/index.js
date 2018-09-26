import constants from '../constants'

export default {
    userLoggedInReceived: (userLoggedIn) => {
        return {
            type: constants.USER_LOGGED_IN,
            data: userLoggedIn
        }
    }
}