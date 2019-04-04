import scrivenerModule from '../modules/scrivener.module';

const getFolders = (req, res) => {
  scrivenerModule.selectFolder()
    .then(result => res.send(result))
    .catch(error => res.send(error));
};

export default {
  getFolders,
};
