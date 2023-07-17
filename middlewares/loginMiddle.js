import jwt from 'jsonwebtoken';
import dot from 'dotenv';

dot.config();

function verifyToken(req, res, next) {
  const token = req.headers['token'];
  if(!token) return res.status(403).json({msg: 'Token invalido'});

  try {
    jwt.verify(token, process.env.SECRET, (err)=> {
    if(err) return res.status(403).json({msg:'Token invalido.'});
      next();
    });
  } catch (err) {
    res.status(500).json({err: 'Erro do servidor'});
  }
}

export default {
  loginMiddle: verifyToken
}
