if (process.env.NODE_ENV !== 'production') { require('dotenv').load() }

var _ = require('lodash')
var foursquare = require('node-foursquare-venues')(process.env.FOURSQUARE_CLIENT_ID, process.env.FOURSQUARE_CLIENT_SECRET)

module.exports = function (bot) {
  bot.respond(/food near (.*)/i, function (res) {
    var params = {
      near: res.match[1],
      categoryId: '4bf58dd8d48988d1e0931735',
      radius: 1000
    }

    return foursquare.venues.search(params, function (error, payload) {
      if (error) return res.send(error)

      var message = '\nHello ! I\'m the neohipster coffee bot. You have this coffee shops nearby:\n\n'

      var coffeeShops = _.sample(payload.response.venues, 3)
      var url = 'https://www.foursquare.com/v/'

      for (var i = 0; i < coffeeShops.length; i++) {
        var cs = coffeeShops[i]
        message += i + ': ' + cs.name + ' (' + url + cs.id + ')\n'
        message += cs.location.address + '\n\n'
      }

      return res.send(message)
    })
  })
}
