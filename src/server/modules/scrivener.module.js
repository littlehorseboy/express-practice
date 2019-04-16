import assert from 'assert';
import { MongoClient } from 'mongodb';
import config from '../../config/config';

const { mLabUrl, mLabDBName } = config;

const selectFolder = () => new Promise((resolve, reject) => {
  MongoClient.connect(mLabUrl, { useNewUrlParser: true }, (connectError, client) => {
    if (connectError) {
      reject(connectError);
    }
    assert.strictEqual(connectError, null);

    const collection = client.db(mLabDBName).collection('folders');

    collection.findOne({ userId: '5ca81987dc63c3bb709c37ff' }, { projection: { folders: 1 } })
      .then((result) => {
        assert.strictEqual(typeof result, 'object');

        resolve(result);
        client.close();
      })
      .catch((error) => {
        reject(error);
        client.close();
      });
  });
});

export default {
  selectFolder,
};
