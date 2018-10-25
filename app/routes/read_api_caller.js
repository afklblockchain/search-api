const request = require('request')
const config = require('./config')

module.exports = {
  getAirlines: async function() {
    return new Promise(function(resolve, reject) {
      request.get(
        `http://${config.app.host}:${config.app.port}/airlines`,
        (error, response, body) => {
          if (error) {
            reject(error)
          }

          resolve(JSON.parse(body))
        }
      )
    })
  },

  getOffers: async function(from, to, date, address) {
    return new Promise(function(resolve, reject) {
      request.get(
        `http://${config.app.host}:${config.app.port}/airlines/` +
          address +
          '/flight-offers?destination=' +
          to +
          '&origin=' +
          from +
          '&date=' +
          date,
        (error, response, body) => {
          if (error) {
            reject(error)
          }

          resolve(JSON.parse(body))
        }
      )
    })
  }
}
