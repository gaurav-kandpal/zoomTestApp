const LOAD_USER = 'LOAD_USER';
const PATIENT_LOGIN_SUCCESS = 'PATIENT_LOGIN_SUCCESS';
const ROLE_CHANGE = 'ROLE_CHANGE';
const MEETING_REQUESTED = 'MEETING_REQUESTED';

export const loadUserData = payload => dispatch => {
    dispatch({
        type: LOAD_USER,
        payload
    })
}

export const onPatientLogin = (data) => (dispatch) => {
    dispatch({
        type: PATIENT_LOGIN_SUCCESS,
        payload: data
    });
};

export const onRoleChange = (data) => (dispatch) => {
    dispatch({
        type: ROLE_CHANGE,
        payload: data
    });
};

export const onRequestAMeeting = (data) => (dispatch) => {
    dispatch({
        type: MEETING_REQUESTED,
        payload: data
    });
};

const initialState = {
    user: {},
    patient: localStorage.getItem('patient'),
    role: '',
    meetingRequested: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            console.log('action', action);
            return { ...state, user: action.payload }
        case PATIENT_LOGIN_SUCCESS:
            return { ...state, patient: action.payload }
        case ROLE_CHANGE:
            console.log('here', state, action)
            return { ...state, role: action.payload }
        case MEETING_REQUESTED:
            console.log('MEETING_REQUESTED', state, action)
            return { ...state, meetingRequested: action.payload }
        default:
            console.log('action-2', state);
            return state
    }
}

export default userReducer;