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
let stateFipsCodes = {
  '01': 'ALABAMA (01)',
  '02': 'ALASKA (02)',
  '04': 'ARIZONA (04)',
  '05': 'ARKANSAS (05)',
  '06': 'CALIFORNIA (06)',
  '08': 'COLORADO (08)',
  '09': 'CONNECTICUT (09)',
  '10': 'DELAWARE (10)',
  '11': 'DISTRICT OF COLUMBIA (11)',
  '12': 'FLORIDA (12)',
  '13': 'GEORGIA (13)',
  '15': 'HAWAII (15)',
  '16': 'IDAHO (16)',
  '17': 'ILLINOIS (17)',
  '18': 'INDIANA (18)',
  '19': 'IOWA (19)',
  '20': 'KANSAS (20)',
  '21': 'KENTUCKY (21)',
  '22': 'LOUISIANA (22)',
  '23': 'MAINE (23)',
  '24': 'MARYLAND (24)',
  '25': 'MASSACHUSETTS (25)',
  '26': 'MICHIGAN (26)',
  '27': 'MINNESOTA (27)',
  '28': 'MISSISSIPPI (28)',
  '29': 'MISSOURI (29)',
  '30': 'MONTANA (30)',
  '31': 'NEBRASKA (31)',
  '32': 'NEVADA (32)',
  '33': 'NEW HAMPSHIRE (33)',
  '34': 'NEW JERSEY (34)',
  '35': 'NEW MEXICO (35)',
  '36': 'NEW YORK (36)',
  '37': 'NORTH CAROLINA (37)',
  '38': 'NORTH DAKOTA (38)',
  '39': 'OHIO (39)',
  '40': 'OKLAHOMA (40)',
  '41': 'OREGON (41)',
  '42': 'PENNSYLVANIA (42)',
  '44': 'RHODE ISLAND (44)',
  '45': 'SOUTH CAROLINA (45)',
  '46': 'SOUTH DAKOTA (46)',
  '47': 'TENNESSEE (47)',
  '48': 'TEXAS (48)',
  '49': 'UTAH (49)',
  '50': 'VERMONT (50)',
  '51': 'VIRGINIA (51)',
  '53': 'WASHINGTON (53)',
  '54': 'WEST VIRGINIA (54)',
  '55': 'WISCONSIN (55)',
  '56': 'WYOMING (56)',
  '60': 'AMERICAN SAMOA (60)',
  '66': 'GUAM (66)',
  '72': 'PUERTO RICO (72)',
  '78': 'VIRGIN ISLANDS (78)'
}
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
            description: 'US Census Bureau State Code',
            type: 'select-map',
            values: stateFipsCodes
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
