var express = require('express');
var router = express.Router();
var db=require('../model/database.js')
var bodyParser=require('body-parser')
const fileUpload = require('express-fileupload')
router.get('/', (req, res)=>{

    res.render('index')
});
router.use(bodyParser.urlencoded({extended:false}))
router.post('/index',(req,res)=>{
    var fname =req.body.fname;
    var lname=req.body.lname;
    var bio=req.body.bio;
    var img_path=req.body.img_path;

db.none("INSERT INTO author(fname,lname,bio,img_path)VALUES($1,$2,$3,$4)",[fname,lname,bio,img_path])


})

module.exports = router;