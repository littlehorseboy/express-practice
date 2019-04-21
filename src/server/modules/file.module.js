import assert from 'assert';
import { MongoClient } from 'mongodb';
import config from '../../config/config';

const { mLabUrl, mLabDBName } = config;

const selectFile = fileId => new Promise((resolve, reject) => {
  MongoClient.connect(mLabUrl, { useNewUrlParser: true }, (connectError, client) => {
    if (connectError) {
      reject(connectError);
    }
    assert.strictEqual(connectError, null);

    const collection = client.db(mLabDBName).collection('files');

    collection.findOne({ fileId })
      .then((result) => {
        assert.strictEqual(typeof result, 'object');
        assert.notStrictEqual(result, null);

        resolve(result);
      })
      .catch((error) => {
        reject(error);
      })
      .then(() => {
        client.close();
      });
  });
});

export default {
  selectFile,
};
