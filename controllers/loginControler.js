import db from '../models/users.js';
import jwt from 'jsonwebtoken';

async function login (req, res) {
  const {name, password} = req.body;

  const dadosParaLogin = {
    name,
    password
  };

  try {
    const valid = await db.findOne({name: dadosParaLogin.name, password: dadosParaLogin.password});
    if(!valid) return res.status(403).json({Error: 'Usuario invalido'});
    
    const token = jwt.sign(name, process.env.SECRET);
    res.status(200).json({
      token: token
    });
  } catch (err) {
    res.status(500).json({err: err});
  }
}

export default {
  login: login
}
