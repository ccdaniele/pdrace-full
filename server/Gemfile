source "https://rubygems.org"

ruby "3.2.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.1"

###-------Databases-------#######

#### SQL lite
# gem "sqlite3", "~> 1.4"

#####postgress
gem 'pg', '~> 1.5', '>= 1.5.4'

###-----------------------#######

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", ">= 5.0"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
# gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ windows jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: true

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin Ajax possible


gem "rack-cors"

gem 'active_model_serializers'


group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri windows ]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"

######## Install Datadog tracer and lograge for logs styling

gem 'lograge'

gem 'ddtrace', '1.22', require: 'ddtrace/auto_instrument'

# gem "dogstatsd-ruby"

####### Seed Data

gem 'smarter_csv', '~> 1.1', '>= 1.1.4'

####### Rabbitmq management

#### http://rubybunny.info/

gem 'bunny', '~> 2.13.0'

# ### https://github.com/mperham/connection_pool

# gem 'connection_pool', '~> 2.2', '>= 2.2.1'

# ### https://github.com/jondot/sneakers

gem 'sneakers'

### https://github.com/brandonhilkert/sucker_punch

# gem 'sucker_punch', '~> 3.0'

gem 'byebug'

gem 'json', '~> 2.7', '>= 2.7.1'



end
