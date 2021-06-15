import {USER_AUTHENTICATED} from './user.types';

const INITIAL_STATE = {
    authenticated: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case USER_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        default: return state
    }
}

export default userReducer;