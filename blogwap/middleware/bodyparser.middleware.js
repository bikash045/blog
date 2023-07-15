const body = require("body-parser");
const urlencoder = body.urlencoded({extended:false});
const jsonencoder = body.json();
module.exports = {
    urlencoder : urlencoder,
    jsonencoder : jsonencoder
}