import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './routes/index';


const app = express();

const server = http.createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

server.listen(8080, function () {
    console.log('server running')
});

