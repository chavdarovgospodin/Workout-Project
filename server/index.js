import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import {
  routes
} from './src/routes';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';

app.use(cors()); //using Cross-Origin Resource Sharing between the two ports (4200,3000)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/workouts', {
  useNewUrlParser: true
}); //connect to mongo

// app.use((req,res,next)=>{
//     console.log('my middleware');
//     next();
// });
routes(app);

app.get('/', (req, res, next) => {
  res.send(`<h1>Express App</h>`);
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Listen on ${HOST}:${PORT}`);
});
