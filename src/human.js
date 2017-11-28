import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

let app = express();
app.server = http.createServer(app);
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : 10
}));

app.get('/', function(req, res){
  console.log("test");
}, function(req, res) {
  res.send('hello world');
});

app.listen(3000);