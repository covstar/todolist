const express = require('express');

const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = [];

app.get('/', function (req, res) {
  let options = {weekday: 'long', month: 'long', day: '2-digit'};
  let today = new Date();

  let day = today.toLocaleDateString('en-US', options);

  res.render('list', {todaysDate: day, newTodoItem: items});
});

app.post('/', function (req, res) {
  const todo = req.body.newItem;
  items.push (todo);

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Started listening at port 3000');
});
