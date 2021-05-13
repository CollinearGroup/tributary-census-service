//Tributary Project Census Data
// MIT License
//
// Copyright (C) 2021  Collinear Group, LLC
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// 
// See LICENSE in the project root for license information.
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