

const express = require('express');
const bodyParser = require('body-parser');
//config db.
const dbConfig =require('./config/config.js');
const mongoose = require('mongoose');

//create app.
const app = express();

app.use(bodyParser.urlencoded({extend:true}))
app.get('/',(req,res)=>{
	res.json({'message':"Welcome To payRoll API, Mr Will,Mr.J and Mr.H"});
});



require('./app/routes/note.routes.js')(app);
require('./app/routes/payroll.routes.js')(app);

app.listen(3000,()=>{console.log("Running on port 3000.")});



mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});