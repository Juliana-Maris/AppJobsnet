



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
// const path = require('path');

// const fs = require('fs'); ???

//configurações
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);
app.use(express.static('public'));

//rotas

router.get('/', (req, res) => {
    res.send('Principal')
});


const port = 8080;
app.listen(port);
console.log('Rodando na porta ' + port);

