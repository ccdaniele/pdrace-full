# Pdracer Users-api

This is an API built with Ruby on Rails to serve as backend to the Pod Racer Application. 

## Arquitecture

* The service consist in four Active models. Three main (Pod, User, Events) and one joining (EventsUsers). 

* Sql Lite as Default Database.

### Relation: 

* Pods **have many** Users
* Users **belongs to**  and Pods **has many** EventsUsers / Events **through** EventsUsers
* Events **has many** EventsUsers / Users **through** EventsUsers

### API routes

* /api/ \<version> / \<model> / \<endpoint> . Example: https://localhost:3000/api/v2/users

#### Routes available:

* v1

```
      get '/users', to: 'users#index'
      get '/users', to: 'users#show'
      get '/user/random', to: 'users#setRandomUser'
      post '/users', to: 'users#destroy'
      post '/users', to: 'users#create'
```
* v2

```
      get '/users', to: 'users#index'
      get '/user/random', to: 'users#setRandomUser'
      get '/user/top', to: 'users#top'
      post '/users', to: 'users#create'
      post '/users/delete', to: 'users#destroy'
      get '/pods', to: 'pods#index'
      post '/pods', to: 'pods#create'
      post '/pods', to: 'pods#destroy'
      get '/events', to: 'events#index'
      post '/events', to: 'events#create'
      post '/events', to: 'events#destroy'
```

## Get started: 

1. Clone repo

```
git clone https://github.com/TSE-Coders/pd-users-api.git
```
2. cd into work directory 
```
cd pd-users-api
```
3. Install gems: 

```
bundler install
```
4. Migrate Databases: 
```
rails db:migrate
```
5. Include seed data (optional)
```
rails db:seed
```
6. Start the server
```
rails s
```
7. Confirm your server is running by hitting the User.all endpoint: 
```
localhost:3000/api/v2/users
```

8. In a new terminal run the command below to start the zendesk job process

```
rake sneakers:run
```

- Building image with processor flag
- https://docs.docker.com/build/building/multi-platform/#:~:text=When%20triggering%20a%20build%2C%20use,one%20platform%20at%20a%20time.

docker build --platform=linux/amd64 -t ccdaniele/pdrace-users-api:v1.0_postgres_linuxamd_ddon_port3000_hostallowapi .


- Images:
  ccdaniele/pdrace-users-api:
  Version: v1.0
  Database: postgres 
  Architecture: linuxamd
  Datadog enabled: ddon
  Rails server: port3000
  host accept request from (hostallow): "api"

sneakers: https://github.com/jondot/sneakers/wiki/How-To:-Rails-Background-Jobs-with-ActiveJob 

Active jobs: https://guides.rubyonrails.org/active_job_basics.html 
