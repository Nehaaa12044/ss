const express = require("express");
const cors=require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());


app.post("/save", (req, res)=> {
                   const url = "mongodb://0.0.0.0:27017";
                   const client = new MongoClient(url);
                  const db = client.db("ss24june24");
                   const coll = db.collection("student");
                    const record = {"name":req.body.name,"company":req.body.company,"pkg":req.body.pkg};
                   coll.insertOne(record)
                  .then(result => res.send(result))
                  .catch(error => res.send(error));
 });

app.listen( 9000,() => { console.log("ready @ 9000 "); });

    