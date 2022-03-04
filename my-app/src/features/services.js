import axios from 'axios'

// config URLS
const API_URL = 'http://localhost:3001/api/v1/user/'


const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const services = {
    register,
    login,
    logout
}

export default services