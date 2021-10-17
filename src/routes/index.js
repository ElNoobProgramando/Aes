const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
router.get('/',(req,res) =>{
    res.render('index.html');
});
router.get('/cifrado1',(req,res)=>{
    res.render('cifrado1.html');
})
router.get('/cifrado2',(req,res)=>{
    res.render('cifrado2.html');
})
router.get('/cifrado3',(req,res)=>{
    res.render('cifrado3.html');
})
module.exports=router;