const express = require('express') 
const app = express()
require('dotenv').config() 
const port=process.env.APP_port



const utilisateurRoutes = require('./routes/utilisateur-routes');
const avisRoutes = require('./routes/avis-routes');
const questionRoutes = require('./routes/question-routes');
const noteRoutes = require('./routes/note-routes');
const reponseRoutes = require('./routes/reponse-routes');
const societeRoutes = require('./routes/societe-routes');


 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//There are a few important things to note in the code above. For one, we’ll using the built-in Express 
//JSON parser middleware to parse JSON in the next steps. We’ll also utilize the express.urlencoded() middleware 
//to parse the URL encoded body.




app.use('/utilisateurs',utilisateurRoutes);
app.use('/avis',avisRoutes);
app.use('/questions',questionRoutes);
app.use('/notes',noteRoutes);
app.use('/reponses',reponseRoutes);
app.use('/societes',societeRoutes);



// simple route
app.get("/", (req, res) => {
    res.json({ message : `Welcome to the backend of the  application` });
  });





// set port, listen for requests
app.listen(port, () => {
    console.log(`the server is runing on port ${port} `);
})





// app.get('/:name', (req, res) => {
//     let name = req.params.name;
//     res.json({message: `Hello ${name}`});
// });






