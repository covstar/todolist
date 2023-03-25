const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const date = require(__dirname + "/public/js/date");
const app = express();


const currentDate = date.getDate();
const list = ["Tasks"];




// engine settings 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', './layouts/layout');

// templating usage 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);


app.get("/", function(req, res){
    res.render("index", {
        title: "Todo List",
        date: currentDate, 
        newItems: list
    });
});

app.post("/", function(req, res){

    list.push(req.body.userInput);

    res.redirect("/");
})


app.listen(8000, function(){
    console.log("Listening on port 8000");
});
