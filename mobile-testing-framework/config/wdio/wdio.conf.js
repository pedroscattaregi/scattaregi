/* eslint-disable */
require('ts-node/register');
require('tsconfig-paths/register');

module.exports = require(`./${process.env.TEST_ENV_VAR}.ts`);

