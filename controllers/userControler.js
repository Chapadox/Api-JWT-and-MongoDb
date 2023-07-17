import userdb from '../models/users.js';

async function addUser(req, res) {
  const {name, password, isAdmin } = req.body;

  const user = {
    name,
    password,
    isAdmin
  }
  try {
    await userdb.create(user);
    res.status(200).json({message: 'Usuario adicionado com sucesso'});
  } catch (err) {
    res.status(500).json({err: err});
  }
}

async function  allUsers(_req, res) {
  const allUsers = await userdb.find();

  try {
    res.status(200).json({users: allUsers});
  } catch (err){
    res.status(500).json({err:err});
  }
}


export default {
  addUser: addUser,
  allusers: allUsers
}
