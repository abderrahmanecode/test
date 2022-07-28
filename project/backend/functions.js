const fs = require("fs");

function readImage(path){
    return fs.readFileSync(path);
}

function writeImage(path){
    const fileName = `${Math.random()
        .toString(36)
        .substring(2, 15)}${Math.random().toString(36).substring(2, 15)}.jpg`;
  
      fs.writeFileSync(`./public/images/${fileName}`, path);
      
}

module.exports = { readImage, writeImage };
