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


// module.exports = function (robot) {
//   robot.hear(/badger/i, function (res) {
//     res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS")
//   })
// }

var http = require("http")

module.exports = function (robot) {
  robot.hear(/lunch3/i, function (res) {
    robot.http.get("https://api.foursquare.com/v2/venues/explore?cat=lunch&mode=url&near=Te+Aro+Wellington&client_id=2OAR4Q21PLV5AB5TWICLLQCY5WDQTGF3I1J4CWDPYKL5RPM3&client_secret=M3WOVTKNK234NNF53QEP5Z35ZKJTX55K3HGGPSYBYHTLOT3C&v=20151101", function(res) {
      console.log(res)
    })
  })
}

//
// var http = require('http');
// var options = {
//   host: 'www.google.com',
//   path: '/index.html'
// };
//
// var req = http.get(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//
//   // Buffer the body entirely for processing as a whole.
//   var bodyChunks = [];
//   res.on('data', function(chunk) {
//     // You can process streamed parts here...
//     bodyChunks.push(chunk);
//   }).on('end', function() {
//     var body = Buffer.concat(bodyChunks);
//     console.log('BODY: ' + body);
//     // ...and/or process the entire body here.
//   })
// });
//
// req.on('error', function(e) {
//   console.log('ERROR: ' + e.message);
// });
