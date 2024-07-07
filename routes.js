const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.render("home");
});
router.get("/articles",(req,res)=>{
    res.send("Coming Soon");
});
router.get("/how-to-host-your-dynamic-website-for-free!" ,(req,res) => {
    res.render("render");
})

module.exports = router;