import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import { NextResponse } from "next/server";
import { decryption } from '@/utils/cryptoPay';

export async function POST(req) {
    try {
        const body = await req.json();
        const name = body.name;
        const email = body.email;
        const paymentMethod = body.paymentMethod;
        const address = body.address;
        const a = body.a;
        const s = body.s;
        const ea = await decryption(a);
        const es = await decryption(s);
        const customer_id = body.cus_id;

        // Update customer's address
        const customer = await stripe.customers.update(
            customer_id,
            {
                address,
            }
          );

        // Create a product
        const product = await stripe.products.create({
            name: `${es} Subscription`,
        })
        // Create a subscription
        const subscription = await stripe.subscriptions.create({
            customer: customer_id,
            items: [
                {
                    price_data: {
                        currency: 'INR',
                        product: product.id,
                        unit_amount: ea * 100,
                        recurring: {
                            interval: 'month'
                        }
                    }
                }
            ],
            payment_behavior: 'default_incomplete',
            payment_settings: { save_default_payment_method: 'on_subscription' },
            expand: ['latest_invoice.payment_intent']
        });
        // Send back the client secret
        return new Response(JSON.stringify({
            message: 'Subscription Successfull',
            clientSecret: subscription.latest_invoice.payment_intent.client_secret,
            subscriptionId: subscription.id,
        }))

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'Payment unsuccessfull' }))
    }
}