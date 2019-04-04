import userLoginModule from '../modules/user.login.module';

const login = (req, res) => {
  userLoginModule.selectUser(req.body.account, req.body.password)
    .then(result => res.send(result))
    .catch(error => res.send(error));
};

export default {
  login,
};
