let cool = require("cool-ascii-faces");

let express = require("express");

let app = express();

app.use("/",express.static("./public"));

const PORT = (process.env.PORT || 10000);


app.get("/cool", (req,res)=>{
    res.send(`<html><body><h1>${cool()}</h1><body><html>`);
});

app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}` );
});









