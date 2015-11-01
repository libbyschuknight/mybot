module.exports = (robot) ->
  robot.hear /badger/i, (res) ->
    res.send "Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS"
  #
  robot.hear /meal/i, (res) ->
    robot.http("https://api.foursquare.com/v2/venues/explore?cat=lunch&mode=url&near=Te+Aro+Wellington&client_id=2OAR4Q21PLV5AB5TWICLLQCY5WDQTGF3I1J4CWDPYKL5RPM3&client_secret=M3WOVTKNK234NNF53QEP5Z35ZKJTX55K3HGGPSYBYHTLOT3C&v=20151101
").get() (err, res, body) ->
        console.log("from lunch2: ", body)
