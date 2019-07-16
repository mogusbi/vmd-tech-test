# Veterinary Medicines Directorate tech test

## Getting started

To start the applications follow the following instructions. Please note this is a monorepo using Lerna.

Run `npm i` to install required dependencies. It is recommended to use Node 10.

### Database

The API requires a Mongo database. You can launch the database via Docker using the command `npm run env`. If you already have a Mongo instance on your machine you can skip this step. Instead go to `packages/api/src/shared/connection.js` and update the connection string.

### API

Once the database is up and running, you can fire up the API by running `npm start -- --scope=@vmd/api`
