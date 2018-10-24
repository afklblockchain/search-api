var request = require('request');

module.exports = {
    getAirlines: async function () {
        return new Promise(function (resolve, reject) {
            request.get("http://localhost:3000/airlines", (error, response, body) => {
            
                if(error) {
                    reject(error);
                }
                
                resolve(JSON.parse(body));
            });
        });
    },

    getOffers: async function(from, to, date, address) {
        return new Promise(function (resolve, reject) {
            request.get('http://localhost:3000/airlines/' +
                 address + '/flight-offers?destination=' +
                 from + '&origin=' +
                 to + '&date=' +
                 date, (error, response, body) => {
            
                if(error) {
                    reject(error);
                }
                
                resolve(JSON.parse(body));
            });
        });
    }
}