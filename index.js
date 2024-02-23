let cool = require("cool-ascii-faces");
let bodyParser = require("body-parser");
let express = require("express");
let contactAPI = require("./api-contacts");

let app = express();

app.use(bodyParser.json());

app.use("/",express.static("./public"));

contactAPI(app);

const PORT = (process.env.PORT || 10000);


app.get("/cool", (req,res)=>{
    res.send(`<html><body><h1>${cool()}</h1><body><html>`);
});


app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}` );
});









