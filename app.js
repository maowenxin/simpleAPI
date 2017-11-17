const express = require('express')
const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/people', function (req, res) {
	let people = {"people":[{ "id": 1, "firstName":"f","lastName":"l"}]};
  res.json(people);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})