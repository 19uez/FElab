import actionTypes from '../actions/actionTypes'


const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    teams: [],
    projects: [],
    joinTeams: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state }
            copyState.isLoadingGender = true
            // console.log('fire fetch gender start ', action)
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:

            state.genders = action.data
            state.isLoadingGender = false
            // console.log('fire fetch gender success ', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:

            state.isLoadingGender = false
            state.genders = []
            // console.log('fire fetch gender failed', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = []
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = []
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.users = action.users
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USER_FAILED:
            state.users = []
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TEAM_SUCCESS:
            state.teams = action.teams
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TEAM_FAILED:
            state.teams = []
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PROJECT_SUCCESS:
            state.projects = action.projects
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PROJECT_FAILED:
            state.projects = []
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TEAM_W_USER_SUCCESS:
            state.joinTeams = action.joinTeams
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TEAM_W_USER_FAILED:
            state.joinTeams = []
            return {
                ...state,
            }
        default:
            return state
    }
}

export default adminReducer