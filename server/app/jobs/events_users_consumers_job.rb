require 'json'
require 'byebug'

class EventsUsersConsumersJob < ApplicationJob

  include Sneakers::Worker
  queue_as :default 

  connection = Bunny.new(automatically_recover: false)
  connection.start

  channel = connection.create_channel
  exchange = channel.topic('zendesk')
  queue = channel.queue('', durable: false)
  
  
  queue.bind(exchange, routing_key: "userevent")
  
  begin
    queue.subscribe(block: true) do |delivery_info, _properties, body|
      hash = JSON.parse(body)
      eu = hash.symbolize_keys
      
      
      event_user = EventsUser.new(user_id:eu[:user_id], event_id:eu[:event_id])
      
      if event_user.save
        puts json: event_user, status: :created, location: event_user
      else
        puts json: event_user.errors, status: :unprocessable_entity
      end
      

    end
  rescue Interrupt => _
    channel.close
    connection.close
  
    exit(0)
  end
  
end
