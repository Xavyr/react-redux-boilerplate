const isTest = String(process.env.NODE_DEV) === 'test'

module.exports = {
  "presets": ["env", "react", "stage-2"],
  "env": {
    "test": {
      "presets": ["env"]
    },
  }

}
