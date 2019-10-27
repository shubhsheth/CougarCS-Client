import React, { Component } from 'react';
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';

class PaymentForm extends Component {
    state = { 
        name: "",
        email: "",
        amount:"100"
    }

    

    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state.name, this.state.email   );

        // this.props.stripe.createPaymentMethod('card', {billing_details: {name: this.state.name}}).then(({paymentMethod}) => {
        //     console.log('Received Stripe PaymentMethod:', paymentMethod);
        // });

        try {
            let {token} = await this.props.stripe.createToken({type: 'card', name: this.state.name, email: this.state.email});
            console.log(token);
            let amount = this.state.amount;

            await fetch('/api/charge', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({token, amount})
            });

        } catch(e) {
            throw e;
        }

        // this.props.stripe
        // .createPaymentMethod('card', {billing_details: {name: 'Jenny Rosen'}})
        // .then(({paymentMethod}) => {
        //   console.log('Received Stripe PaymentMethod:', paymentMethod);
        // });



    }

    render() { 
        return ( 
            <main className="container">
                <form className="form-group mt-3" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" className="input-group" value={this.state.name} onChange={this.handleNameChange} />
                    <label>Email</label>
                    <input type="text" className="input-group" value={this.state.email} onChange={this.handleEmailChange} />
                    <label>Carn Number</label>
                    <CardElement />
                    <button>Submit</button>
                </form>
            </main>
         );
    }
}

export default injectStripe(PaymentForm);