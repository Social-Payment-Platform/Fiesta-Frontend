import Cookies from 'js-cookie'
//import { DateTime } from 'luxon'
import { authenticatedUser, userDetails } from '../helpers/variables'

const TokenService = () => {
    const getTokens = () => {
        if (Cookies.get(authenticatedUser)) {
            const user = JSON.parse(Cookies.get(authenticatedUser))
            return user
        }
        return false
    }

    const getUserDetails = () => {
        if (Cookies.get(userDetails)) {
            const userInfo = JSON.parse(Cookies.get(userDetails))
            return userInfo
        }
        return ''
    }
      
    const setToken = (user) => {
        // let modifiedUser = {...user}
        // modifiedUser.loggedInDateTime = DateTime.utc()
        Cookies.set(authenticatedUser, JSON.stringify(user.token))
        Cookies.set(userDetails, JSON.stringify(user.data))
    }

    const removeToken = () => {
        Cookies.remove(authenticatedUser)
    }

    return {
        getTokens,
        getUserDetails,
        setToken,
        removeToken
    }
} 

export default TokenService()