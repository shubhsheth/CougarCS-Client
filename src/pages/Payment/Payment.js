import React, { Component } from 'react';
import {render} from 'react-dom';
import {StripeProvider, Elements} from 'react-stripe-elements';
import PaymentForm from "./PaymentForm/PaymentForm";


class Payment extends Component {
    state = { 
        name: "Tesla Roadster",
        price: 1000
     }
    render() { 
        return ( 
            <StripeProvider apiKey="pk_test_8kwSZuix7AsQHBDH4VvXKyg8">
                <Elements>
                    <PaymentForm />
                </Elements>
            </StripeProvider>
         );
    }
}
 
export default Payment;