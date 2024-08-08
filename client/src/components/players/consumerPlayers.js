'use server'

import { Connection } from 'rabbitmq-client'
import EventEmitter from 'events'

const rabbit = new Connection('amqp://guest:guest@localhost:5672')
const messageEmitter = new EventEmitter()
let latestMessage

rabbit.on('error', (err) => {
    console.log('RabbitMQ connection error', err)
})

rabbit.on('connection', () => {
    console.log('Connection successfully (re)established')
})

export async function consumerFetch() {
    const queueConfig = {
        queue: 'user-events',
        queueOptions: { durable: true },
        qos: { prefetchCount: 2 },
        exchanges: [{ exchange: 'zendesk', type: 'topic' }],
        queueBindings: [{ exchange: 'zendesk', routingKey: 'marquee' }],
    }

    const sub = rabbit.createConsumer(queueConfig, async (msg) => {
        latestMessage = msg;
        console.log("LATESTMESSAGE?",latestMessage)
        console.log('Received message (user-events)', msg)
        messageEmitter.emit('newMessage', latestMessage) // Emit event when message is received
    })

    sub.on('error', (err) => {
        console.log('Consumer error (user-events)', err)
    })
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
