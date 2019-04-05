import userLoginModule from '../modules/user.login.module';

const findOneUser = (req, res) => {
  userLoginModule.findOneUser(req.body.account, req.body.password)
    .then(result => res.send(result))
    .catch(error => res.send(error));
};

export default {
  findOneUser,
};
