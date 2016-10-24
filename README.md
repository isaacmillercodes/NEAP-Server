# NEAP Server-Side

https://rocky-lake-69382.herokuapp.com/coffee

This is the server side of a NEAP App. It's a RESTful API that serves up JSON.

## Development

1. Set up database
  - create and apply migration
  - create and apply seed
1. set up route config
1. create file in routes folder for that resource
1. add route handlers for that resource
1. Set up knex queries
1. set up env variables
1. add controller (optional)

## Deployment

1. Set up Heroku
1. Push to Heroku
1. Set up db: `heroku addons:create heroku-postgresql:hobby-dev`
1. Run migration: `heroku run knex migrate:latest --env production`
1. Run seed: `heroku run knex seed:run --env production`
1. Heroku restart
