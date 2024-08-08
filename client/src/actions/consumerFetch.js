'use server' 


import {Connection} from 'rabbitmq-client'

const rabbit = new Connection('amqp://guest:guest@localhost:5672')
            
rabbit.on('error', (err) => {
    console.log('RabbitMQ connection error', err)
    })
rabbit.on('connection', () => {
    console.log('Connection successfully (re)established')
    })

export async function consumerFetch (){

    const queueConfig = {
        queue: 'user-events',
        queueOptions: {durable: true},
        qos: {prefetchCount: 2},
        exchanges: [{exchange: 'zendesk', type: 'topic'}],
        queueBindings: [{exchange: 'zendesk', routingKey: 'marquee'}],
    }
        const sub = rabbit.createConsumer( queueConfig, async (msg) => {
                    console.log('received message (user-events)', msg)

                })
        sub.on('error', (err) => {
            console.log('consumer error (user-events)', err)
            })


}
