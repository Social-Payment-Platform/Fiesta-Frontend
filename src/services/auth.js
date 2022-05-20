import axios from 'axios'
import { baseURL } from '../helpers/variables'

const AuthService = () => {
    const createUser  =  async userDetails => {
        const userData = await axios.post(`${ baseURL }/user/signup`, userDetails)
        return userData;
    }
    
    const loginUser = async userDetails => {
        const user = await axios.post(`${ baseURL }/user/login`, userDetails)
        return user;
    }

    // const socialMediaAuth = async (sessionState, code, redirect_uri) => {
    //     const queryParams = await axios.get(`${ baseURL }/api/users/social_auth?sessionState=${sessionState}&code=${code}&redirect_uri=${redirect_uri}`)
    //     return  queryParams.data        
    // }

    return {
        createUser,
        loginUser,
        // socialMediaAuth
    }
}

export default AuthService()