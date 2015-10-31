module.exports = function (robot) {
  robot.respond(/who is the prettist of them all/i, function (res) {
    res.send('LIBBY!!!!')
  })
}

module.exports = function (robot) {
  robot.respond(/Bananas/i, function (res) {
    res.send('in pyjamas')
  })
}
