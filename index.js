const express = require('express')
const app = express();
const PUBLIC_DIR = "/public"
const bodyParser = require('body-parser')
var fs = require('fs')
const directoryPath =  ('/assets/artists/')
const path = require('path'); 

require('dotenv').config();

// console.log('The twillio account SID is:', process.env.TWILIO_ACCOUNT_SID);
// console.log('The twillio auth is:', process.env.TWILIO_AUTH_TOKEN);

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


// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);
// const client = require('twilio')(process.env.accountSid, process.env.authToken);




app.post('/submit', function(req,res) {
    number = req.body.telephone
    // if (number[0] != '+'){
    //   console.log('add dialing code!')
    //   res.render('pages/up');
    //   return
    // }
    console.log(number)
    res.render('pages/submit');
    //change this file directory on the server to '/home/max/flux-fone/numbers.txt'
    fs.appendFile('/home/max/flux-fone/numbers.txt',number.toString()+ ',', function (err) {
        if (err) {
            console.log('saving number error')
        }
        else {
            console.log('number Successfully saved')
            // client.messages
            // .create({
            //    body: "You have signed up to receive weekly Fluxus Performances via SMS. To end this service reply 'STOP' at any time.",
            //    from: '+447429378021',
            //    to: number
            //  })
            // .then(message => console.log(message.sid));
        }
    })
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});