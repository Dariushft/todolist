const express = require("express")
const bodyParser=require("body-parser")
const app = express();
const items=[];
const worklist=[];

app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var currentday = today.toLocaleDateString("fa-IR",options);
     res.render("list", {kindoflist:currentday,todolist:items} );

})

app.post("/",function(req,res){
    const item=req.body.newitem;
    items.push(item);
    res.redirect("/");
})

app.get("/work",function(req,res){
    res.render("list",{kindoflist:"New work",todolist:worklist})


})
app.post("/work",function(req,res){
    var item = req.body.newitem;
    worklist.push(item);
    res.redirect("/work");

})
app.listen(3000,function(){
    console.log("Started on 3000");
})