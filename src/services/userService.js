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
//  default handleLoginApi