import assert from 'assert';
import { MongoClient } from 'mongodb';
import config from '../../config/config';

const { mLabUrl, mLabDBName } = config;

const insertOneUser = (account, password, email) => new Promise((resolve, reject) => {
  MongoClient.connect(mLabUrl, { useNewUrlParser: true }, (connectError, client) => {
    if (connectError) {
      reject(connectError);
    }
    assert.strictEqual(connectError, null);

    const collection = client.db(mLabDBName).collection('users');

    // check repeat
    collection.countDocuments({ account })
      .then((countResult) => {
        assert.strictEqual(countResult === 0, true);
        if (countResult === 0) {
          // insert user
          collection.insertOne({ account, password, email })
            .then((insertOneUserResult) => {
              assert.strictEqual(insertOneUserResult.insertedCount, 1);
              // get user all data
              collection.findOne({ _id: insertOneUserResult.insertedId })
                .then((findOneUserResult) => {
                  assert.strictEqual(typeof findOneUserResult, 'object');

                  resolve(findOneUserResult);
                  client.close();
                })
                .catch((error) => {
                  reject(error);
                  client.close();
                });
            })
            .catch((error) => {
              reject(error);
              client.close();
            });
        } else {
          resolve('repeat');
          client.close();
        }
      })
      .catch((error) => {
        reject(error);
        client.close();
      });
  });
});

export default {
  insertOneUser,
};
