const express = require("express");
const router  = require("./routes")
const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.listen(3000);
console.log("listening on port 3000");

app.use(router);