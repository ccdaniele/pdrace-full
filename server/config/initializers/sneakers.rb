require 'sneakers'
require 'bunny'

Sneakers.configure :connection =>  Bunny.new(automatically_recover: false)

Sneakers.logger = Rails.logger

Sneakers.logger.level = Logger::INFO