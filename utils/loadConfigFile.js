const { readFileSync } = require('fs');
const path = require('path');

/**
 * @param {string} filename
 */
const loadConfigFile = filename =>
  JSON.parse(readFileSync(path.join(__dirname, filename), 'utf8'));

module.exports = loadConfigFile;
