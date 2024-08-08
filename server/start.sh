#!/bin/bash

bin/rails db:migrate
bin/rails db:seed
bin/rails s -p 3000 -b 0.0.0.0
