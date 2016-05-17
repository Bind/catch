const config = require('./knexfile.js')
const env = 'local'
var knex = require('knex')(config[env])
var bookshelf = require('bookshelf')(knex);

module.exports = knex

knex.migrate.latest([config]);