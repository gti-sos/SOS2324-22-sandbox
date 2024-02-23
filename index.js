let cool = require("cool-ascii-faces");
let bodyParser = require("body-parser");

let express = require("express");

let app = express();

app.use(bodyParser.json());

app.use("/",express.static("./public"));

const PORT = (process.env.PORT || 10000);


app.get("/cool", (req,res)=>{
    res.send(`<html><body><h1>${cool()}</h1><body><html>`);
});

const API_BASE = "/api/v1";

var contacts = [
    {
        name: "pepe",
        phone: 12456789
    },
    {
        name: "juan",
        phone: 1243234789
    }
];

app.get(API_BASE+"/contacts", (req,res)=> {
    res.send(JSON.stringify(contacts));
})

app.post(API_BASE+"/contacts", (req,res)=>{
    let contact = req.body;
    contacts.push(contact);
})



app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}` );
});









