import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './routes/index';

const app = express();

app.set('view engine', 'ejs'); // moteur de template permettant d'afficher du html

const server = http.createServer(app);  //on crée le serveur

app.use(logger('dev')); // on ajoute logger pour avoir plus de détails sur les erreurs dans la console
app.use(bodyParser.json()); // o ajoute bodyparser pour le json


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

server.listen(8080, function () { // le serveur écoute sur le port 8080
    console.log('server running')
});

