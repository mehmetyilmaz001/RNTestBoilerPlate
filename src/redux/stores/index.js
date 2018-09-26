import { combineReducers, configureStore, createStore } from 'redux'
import { loginReducer } from '../reducers';

export default{
    configureStore: initial => {
        const reducers = combineReducers({
            login: loginReducer,
        });

        const store = createStore( reducers, initial );

        return store;
    },

    currentStore: () => {
        return store;
    }
}