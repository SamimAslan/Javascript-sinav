import express from 'express';

import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
//route
import filmRouteri from  './routes/movies.js';


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use('/movies', filmRouteri);



app.listen(3000, ()=>{
    console.log("3000. hostta acildi");
});