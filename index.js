var program = require('commander');
var hasher = require('./hash');

program
  .version('0.0.1')

program
  .command('hash [text]')
  .description('hashes the given [text]')
  .action(function(text) {
  	// convert the text to hex
  	var hex = new Buffer(text).toString("hex");
  	console.log(hasher.doubleHash(hex));
  });

program
  .parse(process.argv); 
