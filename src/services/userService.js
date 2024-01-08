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
export const createNewProjectService = (data) => {
    return axios.post('/api/create-new-project', data)
}

export const getAllProjectService = () => {
    return axios.get('/api/get-all-project')
}
export const deleteProject = async (projectId) => {
    console.log('projectId', projectId);
    return await axios.delete('/api/delete-project'
        , {
            data: {
                id: projectId
            }
        })
}

export const editProject = (inputData) => {
    return axios.put('/api/edit-project', inputData)
}

export const saveDetailProjectService = (data) => {
    return axios.post('/api/save-infor-projects', data)
}

export const getDetailInforProject = (inputId) => {
    return axios.get(`/api/get-detail-project-by-id?id=${inputId}`)
}

export const getAllDetailProjectById = (inputId) => {
    return axios.get(`/api/get-detail-project-by-id?id=${inputId}`)
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
export const getDetailInforTeam = (inputId) => {
    return axios.get(`/api/get-detail-team-by-id?id=${inputId}`)
}
export const addUserOnTeam = (data) => {
    return axios.post('/api/add-user-team', data)
}
export const addUserOnProject = (data) => {
    return axios.post('/api/add-user-project', data)
}
//team
