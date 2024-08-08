require 'smarter_csv'


file='db/pods.csv'

options = {}
SmarterCSV.process(file, options) do |chunk|
  chunk.each do |data_hash|
    Pod.create!( data_hash )
  end
end

file='db/users.csv'

options = {}
SmarterCSV.process(file, options) do |chunk|
  chunk.each do |data_hash|
    User.create!( data_hash )
  end
end

file='db/events.csv'

options = {}
SmarterCSV.process(file, options) do |chunk|
  chunk.each do |data_hash|
    Event.create!( data_hash )
  end
end

file='db/usersevents.csv'

options = {}
SmarterCSV.process(file, options) do |chunk|
  chunk.each do |data_hash|
    EventsUser.create!( data_hash )
  end
end
