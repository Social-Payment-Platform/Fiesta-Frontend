import { useEffect } from "react"
import image from "../assets/congratulatory-img.svg"

const PaymentSuccessful = () => {
    useEffect(() => {
        setTimeout(() => {
            window.close()
        }, 5000)
    })
    return (
        <div class="text-center me-3 ms-3 mt-5 pt-5">
            <h2 class="reset-pw">Payment Successful</h2>

            <img class="load-icon mt-5" src={image} alt="congratulations" />
        </div>
    )
}

export default PaymentSuccessful;