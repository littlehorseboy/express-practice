import fileModule from '../modules/file.module';

const getFile = (req, res) => {
  fileModule.selectFile(req.query.fileId)
    .then(result => res.send(result))
    .catch(error => res.send(error));
};

const putFile = (req, res) => {
  fileModule.insertOrUpdateFile({
    fileId: req.body.fileId,
    content: req.body.content,
  })
    .then(result => res.send(result))
    .catch(error => res.send(error));
};

export default {
  getFile,
  putFile,
};
