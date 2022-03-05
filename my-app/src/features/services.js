import axios from 'axios'

// import { getToken, removeToken, setToken } from '../app/utils/tokens'

// config URLS
const API_URL = 'http://localhost:3001/api/v1/user/'


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
    login,
    logout
}

export default services