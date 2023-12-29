import axios from '../axios'

export const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}
export const getAllUser = (inputId) => {
    //template string
    return axios.get(`/api/get-all-user?id=${inputId}`)
}
export const creatNewUserService = (data) => {
    console.log('check data post', data)
    return axios.post('/api/create-new-user', data)
}
export const deleteUser = (userId) => {
    return axios.delete('/api/delete-user'
        , {
            data: {
                id: userId
            }
        })
}
export const editUser = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}
export const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
export const saveDetailMemberService = (data) => {
    return axios.post('/api/save-infor-members', data)
}
//project
export const createNewProject = (data) => {
    return axios.post('/api/create-new-project', data)
}

export const getAllProjectService = () => {
    return axios.get('/api/get-all-project')
}
//project
export const getDetailInforMember = (inputId) => {
    return axios.get(`/api/get-detail-member-by-id?id=${inputId}`)
}
//team
export const createNewTeam = (data) => {
    return axios.post('/api/create-new-team', data)
}
export const getAllTeamService = (inputId) => {
    return axios.get(`/api/get-all-team?id=${inputId}`)
}

export const deleteTeam = (teamId) => {
    return axios.delete('/api/delete-team'
        , {
            data: {
                id: teamId
            }
        })
}
export const editTeam = (inputData) => {
    return axios.put('/api/edit-team', inputData)
}

//team
