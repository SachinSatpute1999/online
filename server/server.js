const promise = require("bluebird");


const initOptions = {
    promiseLib: promise 

};
  const pgp=require('pg-promise')(initOptions);

  const cn = {
      host: 'localhost',
      port: 5432, 
      database: 'grocerydb',
      user: 'postgres',
      password: 'root',
       
      allowExitOnIdle: true
  };
   
  const db = pgp(cn);

   var AllProducts= undefined;
   var AllCategories= undefined;
   var CategoryById =undefined;

  db.many("Select * from products;")
  .then((data) => {
      this.AllProducts = data;
}) .catch((error) => {
    console.log("Error : " + error); 
});



const express = require("express");
const server = express();
const port = 3000;
const cors = require("cors");
const CORS_OPTIONS={origin:"http://localhost:4200"};
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors(CORS_OPTIONS));
  const { all } = require("bluebird");

server.use(cors());
  server.use(express.json());
server.get("/products",(req,res) => {
    res.setHeader("content-type","application/json");
    res.send(this.AllProducts);
});



server.listen(port,()=> { 
    console.log("Server started");
});
