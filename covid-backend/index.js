
const express = require('express')
const mongoose = require('mongoose');
const covidstat = require('./models/covidstat');
const app = express()
const port = 5000


mongoose.connect('mongodb+srv://abhi:abhi@covidcluster.1avnt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
}).then(()=>{
  console.log('Database Connected');
}).catch(err=>{
  console.log('Database not connected' + err)
});

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/', (req, res) => {
  res.send('updated')
})

app.get('/country-ex', (req, res) => {

  covidstat.find({
    "$or": [
      { "Country": "United States" },
      { "Country": "India" },
      { "Country": "Brazil" },
      { "Country": "France" },
      { "Country": "United Kingdom" }
    ]
  })
    .then((result)=> {
      console.log(result);
      res.json(result);
    })
    .catch((err)=> {
      console.log(err);
    });
  
})

app.get('/cases', (req, res) => {
    res.send('cases')
})

app.get('/deaths', (req, res) => {
    res.send('deaths')
})

app.get('/recoveries', (req, res) => {
    res.send('recoveries')
})

app.get('/combined', (req, res) => {
    res.send('combined')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
