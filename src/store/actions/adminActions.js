import actionTypes from './actionTypes';
import {
    getAllCodeService, creatNewUserService,
    getAllUser, deleteUser, editUser, saveDetailMemberService,
    getAllTeamService, deleteTeam, editTeam, createNewTeam
} from '../../services/userService'
import { toast } from 'react-toastify'
// import { dispatch } from '../../redux';


//Gender
export const fetchGenderStart = () => {
    // type: actionTypes.FETCH_GENDER_START,
    return async (dispacth, getState) => {
        try {
            dispacth({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService('GENDER')
            if (res && res.errCode === 0) {
                dispacth(fetchGenderSuccess(res.data))
            } else {
                dispacth(fetchGenderFailed())
            }
        } catch (e) {
            dispacth(fetchGenderFailed())
            console.log('fetGenderStart error ', e)
        }
    }
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})
//Gender

//Position
export const fetchPositionStart = () => {
    return async (dispacth, getState) => {
        try {

            let res = await getAllCodeService('POSITION')
            if (res && res.errCode === 0) {
                dispacth(fetchPositionSuccess(res.data))
            } else {
                dispacth(fetchPositionFailed())
            }
        } catch (e) {
            dispacth(fetchPositionFailed())
            console.log('fetchPositionFailed error ', e)
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})
//Position

//Role
export const fetchRoleStart = () => {
    return async (dispacth, getState) => {
        try {

            let res = await getAllCodeService('ROLE')
            if (res && res.errCode === 0) {
                dispacth(fetchRoleSuccess(res.data))
            } else {
                dispacth(fetchRoleFailed())
            }
        } catch (e) {
            dispacth(fetchRoleFailed())
            console.log('fetchRoleFailed error ', e)
        }
    }
}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

//Role

//User
export const createNewUser = (data) => {
    return async (dispacth, getState) => {
        try {

            let res = await creatNewUserService(data)

            if (res && res.errCode === 0) {
                toast.success('Creat a new user success')
                dispacth(saveUserSuccess())
                dispacth(fetchAllUsersStart())
            } else {
                dispacth(saveUserFailed())
            }
        } catch (e) {
            dispacth(saveUserFailed())
            console.log('fetchRoleFailed error ', e)
        }
    }
}
export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUser('All')
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            } else {
                toast.error('fetch all user error!')
                dispatch(fetchAllUsersFailed())
            }

        } catch (e) {
            toast.error('Fetch all user error!')
            dispatch(fetchAllUsersFailed())
            console.log('fetchAllUserFailed error', e)
        }
    }
}
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED,
})
export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUser(userId)
            if (res && res.errCode === 0) {
                toast.success('Delete a user success')
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Delete all user error!')
                dispatch(deleteUserFailed())

            }
        } catch (e) {
            toast.error('Delete all user error!')
            dispatch(deleteUserFailed())
            console.log('Delete user failed', e)
        }
    }
}
export const deleteUserSuccess = (data) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUser(data)
            if (res && res.errCode === 0) {
                toast.success('Edit a user success')
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart())
            } else {
                toast.error('Edit all user error!')
                dispatch(editUserFailed())

            }
        } catch (e) {
            toast.error('Edit all user error!')
            dispatch(editUserFailed())
            console.log('Edit user failed', e)
        }
    }
}
export const editUserSuccess = (data) => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})

//Member
export const saveDetailMember = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailMemberService(data)
            if (res && res.errCode === 0) {
                toast.success('Save infor member success')
                dispatch({ type: actionTypes.SAVE_DETAIL_MEMBER_SUCCESS })
            } else {
                toast.error('Save infor member error!')
                dispatch({ type: actionTypes.dispatch({ type: actionTypes.SAVE_DETAIL_MEMBER_SUCCESS }) })
            }

        } catch (e) {
            toast.error('Save infor member error!')
            dispatch({ type: actionTypes.dispatch({ type: actionTypes.SAVE_DETAIL_MEMBER_SUCCESS }) })
            console.log('SAVE_DETAIL_MEMBER_SUCCESS error', e)
        }
    }
}
//Member
//User

//Team
export const createNewTeamRedux = (data) => {
    return async (dispacth, getState) => {
        try {

            let res = await createNewTeam(data)

            if (res && res.errCode === 0) {
                toast.success('Creat a new team success')
                dispacth(saveTeamSuccess())
                dispacth(fetchAllTeamsStart())
            } else {
                dispacth(saveTeamFailed())
            }
        } catch (e) {
            dispacth(saveTeamFailed())
            console.log('fetchTeamFailed error ', e)
        }
    }
}

export const saveTeamFailed = () => ({
    type: actionTypes.CREATE_TEAM_FAILED
})
export const saveTeamSuccess = () => ({
    type: actionTypes.CREATE_TEAM_SUCCESS
})

export const fetchAllTeamsStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllTeamService('All')
            if (res && res.errCode === 0) {
                dispatch(fetchAllTeamsSuccess(res.teams.reverse()))
            } else {
                toast.error('fetch all team error!')
                dispatch(fetchAllTeamsFailed())
            }

        } catch (e) {
            toast.error('Fetch all team error!')
            dispatch(fetchAllTeamsFailed())
            console.log('fetchAllTeamsSuccess error', e)
        }
    }
}
export const fetchAllTeamsSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_TEAM_SUCCESS,
    teams: data
})
export const fetchAllTeamsFailed = () => ({
    type: actionTypes.FETCH_ALL_TEAM_FAILED,
})

export const deleteATeam = (teamId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteTeam(teamId)
            if (res && res.errCode === 0) {
                toast.success('Delete a team success')
                dispatch(deleteTeamSuccess())
                dispatch(fetchAllTeamsStart())
            } else {
                toast.error('Delete all team error!')
                dispatch(deleteTeamFailed())

            }
        } catch (e) {
            toast.error('Delete all team error!')
            dispatch(deleteTeamFailed())
            console.log('Delete team failed', e)
        }
    }
}
export const deleteTeamSuccess = (data) => ({
    type: actionTypes.DELETE_TEAM_SUCCESS,
})
export const deleteTeamFailed = () => ({
    type: actionTypes.DELETE_TEAM_FAILED,
})

export const editATeam = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editTeam(data)
            if (res && res.errCode === 0) {
                toast.success('Edit a team success')
                dispatch(editTeamSuccess())
                dispatch(fetchAllTeamsStart())
            } else {
                toast.error('Edit all team error!')
                dispatch(editTeamFailed())

            }
        } catch (e) {
            toast.error('Edit all team error!')
            dispatch(editTeamFailed())
            console.log('Edit team failed', e)
        }
    }
}
export const editTeamSuccess = (data) => ({
    type: actionTypes.EDIT_TEAM_SUCCESS,
})
export const editTeamFailed = () => ({
    type: actionTypes.EDIT_TEAM_FAILED,
})

