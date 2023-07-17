import userdb from '../models/users.js';

async function admin(req, res) { 
  const {name, password} = req.body; 
  
  const user = {
    name,
    password
  };

  try {
  const verifyAdmin = await userdb.findOne({name: user.name, password: user.password});

  if(verifyAdmin.isAdmin == true) return res.status(200).json({msg: 'Você entrou no painel de Admin'});
  else return res.status(403).json({msg: 'Você não é Admin'});  
  
  } catch (err) {
    res.status(500).json({err: 'Dados de login invalidos'});
  }
};

export default {
  adminMiddle: admin
}
