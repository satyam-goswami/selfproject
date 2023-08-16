//Jshint esversion:6
 const registermember=[
         
 ];


const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app=express();


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/",function(req,res){
    
    res.sendFile(__dirname+"/public/index.html");
});
app.post("/",function(req,res){
    const member={
        firstname:req.body.fName,
        lastname:req.body.lName,
        email:req.body.email
    }
    registermember.push(member);
    console.log(registermember);
    //console.log(__dirname+"\login.ejs");
   res.redirect("\login");


});
app.get("/login",function(req,res){
  res.render(__dirname+"/view/login.ejs");
});







/*
this below code for when user alredy register in it.
registermember.forEach(function(post){


    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
  });*/















app.listen(3000,function(){
    console.log("server started on port 3000");
});
