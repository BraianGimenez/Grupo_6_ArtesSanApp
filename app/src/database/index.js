const fs = require("fs");
const path = require("path");
const database = require("./products.json")


module.exports = {
    readJSON: (json) => {
        return JSON.parse(fs.readFileSync(path.join(__dirname, json)));
    },
    writeJSON: (json, array) => {
        return fs.writeFileSync(path.join(__dirname,json),JSON.stringify(array,null,3),"utf-8");
    }
    
    
} 