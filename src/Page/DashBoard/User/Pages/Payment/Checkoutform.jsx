import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const Checkoutform = (item) => {
    const [cardError , setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    console.log(item)
    const handleSubmit = async (event)=>{
        event.preventDefault();

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
            setCardError(error.message)
          } else {
            console.log('PaymentMethod', paymentMethod);
            setCardError('')
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