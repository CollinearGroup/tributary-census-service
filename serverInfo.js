let serverInfo = {
    server: {
      name: "US Census Data",
      apiVersion: "0.2",
      "attribution": {
        "text": "" 
      }
    },
    availableDataSeries: {
      povertyRate: {
        name: "Poverty Rate By State",
        description: "Poverty rate by state",
        attributes: {
          stateCode: {
            name: 'State FIPS Code',
            description: 'US Census Bureau State Code'
          }
        }
      }
    }
}

module.exports = {
    serverInfo
}
// add attribution line
// "This product uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau."