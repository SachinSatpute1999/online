const promise = require("bluebird");


const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);
// See also: http://vitaly-t.github.io/pg-promise/module-pg-promise.html

// Database connection details;
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'productdb',
    user: 'postgres',
    password: 'root',

    // to auto-exit on idle, without having to shut-down the pool;
    // see https://github.com/vitaly-t/pg-promise#library-de-initialization
    allowExitOnIdle: true
};
// You can check for all default values in:
// https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/defaults.js

const db = pgp(cn); // database instance;

var allBook = undefined;
var allGroceryProducts=undefined;

db.many("Select * from book;")
.then((data) => { 
   this.allBook =  data;
}).catch((error) => {
    console.log("Error : " + error);
});

db.many("Select * from products;")
.then((data) => { 
   this.allGroceryProducts =  data;
}).catch((error) => {
    console.log("Error : " + error);
});

 

const express = require("express");
const server = express();
const port = 3000;
const cors = require("cors");

server.use(cors());

server.get("/book",(req, res) => {
    res.setHeader("content-type","application/json");
    res.send(this.allBook);
});
server.get("/products",(req, res) => {
    res.setHeader("content-type","application/json");
    res.send(this.allGroceryProducts);
});

server.listen(port,()=> {
    console.log("Server started");
});
