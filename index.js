const express = require('express')
const app = express();
const PUBLIC_DIR = "/public"
const bodyParser = require('body-parser')
var fs = require('fs')
const directoryPath =  ('/assets/artists/')
const path = require('path'); 



// app.use(express.static('public'))
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded( { extended: true}))

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});


// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// artist page
app.get('/artists', function(req, res) {
  res.render('pages/artists');
});

// submission page
app.get('/up', function(req, res) {
  res.render('pages/up');
});
// //sign up page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + PUBLIC_DIR + '/html/index.html'));
// });


// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACf22add1be2030783a9b782ede87c78a2';
const authToken = '4027a6a7e5bbaf286d8d7b9c5b0a718a';
const client = require('twilio')(accountSid, authToken);


app.post('/submit', function(req,res) {
    int_number = "+44" + req.body.telephone.slice(1,);
    console.log(int_number)
    res.render('pages/submit');
    //change this file directory on the server to '/home/max/flux-fone/numbers.txt'
    fs.appendFile('numbers.txt',int_number.toString()+ ',', function (err) {
        if (err) {
            console.log('saving number error')
        }
        else {
            console.log('number Successfully saved')
            // client.messages
            // .create({
            //    body: "You have signed up to receive weekly Fluxus Performances via SMS. To end this service reply 'STOP' at any time.",
            //    from: '+447429378021',
            //    to: int_number
            //  })
            // .then(message => console.log(message.sid));
        }
    })
  });


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});