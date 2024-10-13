import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkoutform from "./Checkoutform";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PK_STRIPE);
const Payment = () => {
    const location = useLocation()
    const item = location?.state?.item
    return (
        <div className="text-center">
            <h1 className="text-2xl font-semibold py-3">Payment Section</h1>
            <div className="flex justify-center items-center gap-3 font-semibold py-3">
            <h3>Course Name: <span className="badge badge-warning">{item?.name}</span></h3>
            <h3>Price: <span className="badge badge-success">{item?.price}</span></h3>
            </div>
            <Elements stripe={stripePromise}>
            <Checkoutform item={item} />
            </Elements>
        </div>
    );
};

export default Payment;