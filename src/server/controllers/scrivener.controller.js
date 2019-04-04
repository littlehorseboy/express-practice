import scrivenerModule from '../modules/scrivener.module';

const getFolders = (req, res) => {
  scrivenerModule.selectFolders()
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

export default {
  getFolders,
};
