var fs = require("fs");

fs.writeFile('planets.txt', mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto, function(err) {
 if(err){
    console.log(err);
 }var content = fs.readFileSync('planets.txt','utf8');
 console.log(content)
   
});
