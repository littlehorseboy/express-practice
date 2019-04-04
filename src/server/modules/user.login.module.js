import assert from 'assert';
import { MongoClient } from 'mongodb';
import config from '../../config/config';

const { mLabUrl, mLabDBName } = config;

const selectUser = (account, password) => new Promise((resolve, reject) => {
  MongoClient.connect(mLabUrl, { useNewUrlParser: true }, (connectError, client) => {
    if (connectError) {
      reject(connectError);
    }
    assert.strictEqual(connectError, null);

    const collection = client.db(mLabDBName).collection('users');

    collection.countDocuments({ account, password })
      .then((result) => {
        assert.strictEqual(typeof result, 'number');

        resolve(result.toString());
        client.close();
      })
      .catch((error) => {
        reject(error);
        client.close();
      });
  });
});

export default {
  selectUser,
};
