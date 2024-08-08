'use server'

import { Connection } from 'rabbitmq-client'
import EventEmitter from 'events'

// Created EventEmitter object to catch when consumer it's emitting
const messageEmitter = new EventEmitter()

// Made available consumer message to the rest of the component
let latestMessage


// Starts rabbitmq connection and creates consumer
export async function consumerFetch() {
    // Define queue configuration 
    const queueConfig = {
        queue: 'user-events',
        queueOptions: { durable: true },
        qos: { prefetchCount: 2 },
        exchanges: [{ exchange: 'zendesk', type: 'topic' }],
        queueBindings: [{ exchange: 'zendesk', routingKey: 'marquee' }],
    }
    
    try{
        // new rabbitmq connection started
            const rabbit = new Connection(`${process.env.RABBITMQ_CREDS}`)

            rabbit.on('error', (err) => {
                console.log('RabbitMQ connection error', err)
            })
            
            rabbit.on('connection', () => {
                console.log('Connection successfully (re)established')
            })

        // creates a new consumer instance 
            const sub = rabbit.createConsumer(queueConfig, async (msg) => {
                latestMessage = msg;
                console.log('Received message (user-events)', msg)
                messageEmitter.emit('newMessage', latestMessage) // Emit event when message is received
            })

            sub.on('error', (err) => {
                console.log('Consumer error (user-events)', err)
            })
    }catch(error){console.log( 'There was an error initializing the consumer', error)}

}

// Async function to get the latest message
export async function getLatestMessage() {
    console.log('Getting latest message...');
    consumerFetch()
    return new Promise((resolve) => {
        if (latestMessage) {
            console.log('Latest message already available:', latestMessage);
            resolve(latestMessage)
        } else {
            console.log('Waiting for new message...');
            messageEmitter.once('newMessage', (msg) => {
                console.log('New message received:', msg);
                resolve(msg)
            })
        }
    })
}
