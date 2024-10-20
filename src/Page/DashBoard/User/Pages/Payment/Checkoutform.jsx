import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import useGetInfo from "../../UserHooks/useGetInfo";
import Swal from "sweetalert2";
import useMyClass from "../../../../../Hooks/useMyClass";
import { useNavigate } from "react-router-dom";


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
    const[, refetchMyClass, ] = useMyClass()
    const navigate = useNavigate()
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
                date: dateTimeString,
                time: timeString,
                pay: paymentIntent.status,
                transactionId: traxID,
                price: item.item.price,
                classId: item.item.classId,
                email: item.item.email,
                cartId: item.item._id,
                student_name: userInfo?.name 
            }
            console.log(paymentSlip)
            axiosSecure.post('/makepayment', paymentSlip)
            .then(res =>{
                if(res.data.status){
                  refetchMyClass()
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Congratulations, Successfully Enrolled',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/dashboard/enroll')
                }
                else{
                  Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Something went wrong',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
            })
          }

    }
    return (
        <div className="text-center my-10 flex flex-col justify-center items-center">
            <form className="w-full md:w-1/2 px-5 md:px-20" onSubmit={handleSubmit}>
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