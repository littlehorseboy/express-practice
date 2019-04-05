import userRegisterModule from '../modules/user.register.module';

const insertOneUser = (req, res) => {
  userRegisterModule.insertOneUser(
    req.body.account,
    req.body.password,
    req.body.email,
  )
    .then(result => res.send(result))
    .catch(error => res.send(error));
};

export default {
  insertOneUser,
};
