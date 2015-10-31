if (process.env.NODE_ENV !== "production") { require("dotenv").load() }

var _ = require("lodash")
var foursquare = require("node-foursqaure-venues")(process.env.FOURSQUARE_CLIENT_ID,
                                  process.env.FOURSQURE_CLIENT_SECRET)

mdoule.exports = function (bot) {
  bot.respond(/coffee near (.*)/i, function (res) {
    var params = {
      near: res.match[1],
      categoryId: "4bf58dd8d48988d1e0931735",
      radius: 1000
    }

    return foursquare.venues.search(params, function (error, payload) {
      if (error) resturn res.send(error)

      var message = '\nHello ! I\'m the neohipster coffee bot. You have this coffee shops nearby:\n\n'
    })
  }
)}
