import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkoutform from "./Checkoutform";

const stripePromise = loadStripe(import.meta.env.VITE_PK_STRIPE);
const Payment = () => {
    
    return (
        <div className="text-center">
            <h1>Payment Section</h1>
            <Elements stripe={stripePromise}>
            <Checkoutform />
            </Elements>
        </div>
    );
};

export default Payment;