var crypto = require('crypto');

module.exports.doubleHash = function(dataHex) {
  var sha1 = crypto.createHash('sha256');
  var sha2 = crypto.createHash('sha256');
  var firstPass = sha2.update(new Buffer(dataHex,"hex")).digest("hex");
  var secondPass = sha1.update(new Buffer(firstPass, "hex")).digest("hex");
  var hash = secondPass.match(/../g).reverse().join("");
  return hash;
};

