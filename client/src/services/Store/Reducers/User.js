const LOAD_USER = 'LOAD_USER';

export const loadUserData = payload => dispatch => {
    dispatch({
        type: LOAD_USER,
        payload
    })
}

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default userReducer;