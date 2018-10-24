var readApi = require('./read_api_caller');

module.exports = {
  search: function (app) {
    app.post('/search', async (req, res) => {
      const query = { from: req.body.from, to: req.body.to, date: req.body.date, cabinClass: req.body.cabinClass, nbPax: req.body.nbPax };

      //const airlinesList = await readApi.getAirlines();
      const airlinesList = JSON.parse('[{ "address": "0xFE4D6C10F3B70f2586C41d16C862A19a89Cf8F03" }]');

      var allOffers = [];
      var i;
      for(i = 0; i < airlinesList.length; i++) {
        allOffers.push(await readApi.getOffers(query.from, query.to, query.date, airlinesList[i].address));
      }

      res.send(allOffers);
    });
  }
}
