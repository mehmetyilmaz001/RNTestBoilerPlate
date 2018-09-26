import constants from '../constants'

var initialState = {
    userLoggedIn : false
}

export default(state = initialState, action) => {
    
    let newState = Object.assign({}, state);
    
    switch(action.type){
        case constants.USER_LOGGED_IN:
            newState.userLoggedIn = action.data;
            return newState;
        default:
            return state
    }

}