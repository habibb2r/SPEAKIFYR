import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import useGetInfo from "../../UserHooks/useGetInfo";


const Checkoutform = (item) => {
    const [cardError , setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setclientSecret] = useState("");
    const [errorMessage, setError] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [userInfo, loadUserInfo] = useGetInfo()
    const price = item?.item?.price;
    console.log(item)
    useEffect(() => {
        if (price > 0) {
          axiosSecure.post("/createPayment-intent", { price }).then((res) => {
            console.log(res.data.clientSecret);
            setclientSecret(res.data.clientSecret);
          });
        }
      }, [price, axiosSecure]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const today = new Date();
    
        const dateOptions = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        };
        
        const timeOptions = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        
        const dateTimeString = today.toLocaleDateString('en-GB', dateOptions); // DD/MM/YYYY format
        const timeString = today.toLocaleTimeString('en-US', timeOptions); 

        if(!stripe || !elements){
            return; 
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            console.log('error', error);
            setError(error.message)
          } else {
            console.log('PaymentMethod', paymentMethod);
            setError('')
          }
          setProcessing(true);

          const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: userInfo?.name || "unknown",
                email: userInfo?.email || "unknown",
              },
            },
          });
          if (confirmError) {
            console.log(confirmError);
          }

          if(paymentIntent.status === 'succeeded'){
            const traxID = paymentIntent.id;
            setTransactionId(traxID);

            const paymentSlip ={
                ...item.item,
                date: dateTimeString,
                time: timeString,
                payment: paymentIntent.status,
                transactionId: traxID
            }
            axiosSecure.post('/makepayment', paymentSlip)
            .then(res =>{
                console.log(res.data)
            })
          }

    }
    return (
        <div className="text-center my-10 flex flex-col justify-center items-center">
            <form className="w-1/2 px-20" onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="btn btn-warning my-10" type="submit" disabled={!stripe || !item.item.price}>
                Payment
            </button>
            </form>
            {cardError && <p className="text-red-600">**{cardError}</p>}
        </div>
    );
};

export default Checkoutform;