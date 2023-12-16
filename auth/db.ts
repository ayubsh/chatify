import knex from 'knex';
import {Model} from 'objection';

import {config}  from './knexfile'

const environment = process.env.NODE_ENV || 'development';

const connectionConfig = config[environment];

const connection = knex(connectionConfig);

Model.knex(connection);

export default connection;
