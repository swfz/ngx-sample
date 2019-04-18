// const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor')
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = on => {
  // on('file:preprocessor', cypressTypeScriptPreprocessor)
  getCompareSnapshotsPlugin(on);
}
