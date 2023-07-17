import express from 'express';
import rotas from './router.js';
import conectDB from './models/connection.js';

const app = express();

app.use(express.json());
app.use(rotas);

conectDB(app);

// By Destr00 
