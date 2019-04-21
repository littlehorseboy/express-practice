import fileModule from '../modules/file.module';

const getFile = (req, res) => {
  fileModule.selectFile(req.query.fileId)
    .then(result => res.send(result))
    .catch(error => res.send(error));
};

export default {
  getFile,
};
