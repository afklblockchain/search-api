var readApi = require('./read_api_caller');

module.exports = {
  search: function (app) {
    app.post('/search', async (req, res) => {
      const query = { from: req.body.from, to: req.body.to, date: req.body.date, cabinClass: req.body.cabinClass, nbPax: req.body.nbPax };

      const airlinesList = await readApi.getAirlines();

      var allOffers = [];
      var i;
      for(i = 0; i < airlinesList.items.length; i++) {
        allOffers.push(await readApi.getOffers(query.from, query.to, query.date, airlinesList.items[i].id));
      }

      res.send(allOffers);
    });
  }
}
