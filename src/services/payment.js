import axios from 'axios'
import { baseURL } from '../helpers/variables'
import tokenService from './tokenService'

const Payment = () => {
    const makePayment  =  async paymentDetails => {
        const token = tokenService.getToken();
        console.log(token)
        const response = await axios.post(`${ baseURL }/business/hire/628851041155aa06969a4c5c`, paymentDetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response;
    }

    return {
        makePayment,
    }
}

export default Payment()