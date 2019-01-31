let serverInfo = require('./serverInfo').serverInfo;
let cachedData = {}
const axios = require('axios');

function baseRoute (req, res) {
    serverInfo.server.attribution.text = "This product uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau.";
    res.json(serverInfo);
}

function povertyRate (req, res) {
    let stateCode = req.query.stateCode
    if(!stateCode) {
        if(req.query.location) {
            stateCode = req.query.location
            console.log("WARNING: State code came in as location!")
        }
    }
    getCensusData(stateCode).then((data) => {
        // console.log("GOT DATA: ", data)
        console.log(data);
        let responseObj = {
            units: {
                name: "Rate"
            },
            format: "date",
            initialDataSet: []
        }
        data.forEach((dt) => {
            if(dt[0] === 'YEAR') {
                //Skip the header
            } else {
                responseObj.initialDataSet.push([new Date(dt[0]+"-01-01T00:00:00.000Z").getTime(), Number.parseFloat(dt[3])])
            }
        })
        res.send(responseObj)
    }, (err) => {
        res.send(err)
    })
}

function getCensusData(stateCode) {
    // https://api.census.gov/data/timeseries/poverty/saipe?for=state:53&get=YEAR,NAME,SAEMHI_PT,SAEPOVRTALL_PT
    let apiURL = `https://api.census.gov/data/timeseries/poverty/saipe?for=state:${stateCode}&get=YEAR,NAME,SAEMHI_PT,SAEPOVRTALL_PT`;
    return axios.get(apiURL)
        .then(res => {
            cachedData[stateCode] = res.data;
            return res.data;
        });
}

module.exports = {
    baseRoute,
    povertyRate
};