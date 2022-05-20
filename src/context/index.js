import { useState, createContext } from 'react'
import Cookies from 'js-cookie'
import { authenticatedUser } from '../helpers/variables'
import tokenService from '../services/tokenService'

export const Context = createContext()

const Provider = props => {
    const [user, setUser] = useState(Cookies.get(authenticatedUser) || null)

    const handleLogin = loggedInUser => {
        if (loggedInUser) {
            setUser(loggedInUser)
            tokenService.setToken(loggedInUser)
        }
    }

    const getUserDetails = () => {
        return tokenService.getUserDetails()
    }

    // const handleLogOut = () => {
    //     setUser(null)
    //     tokenService.removeToken()
    // }
    
    return(
        <Context.Provider value= {{ user, userDetails: getUserDetails(),
            actions: { 
                login: handleLogin, 
                // logout: handleLogOut
            } 
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider