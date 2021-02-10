var MONGO_DB = require('mongodb');
const MongoClient = MONGO_DB.MongoClient;
const url = process.env.MONGO_URL;

try {
    var M_CONNECT = MongoClient.connect(url, {
        useUnifiedTopology: true
    });
    module.exports = { MONGO_DB, M_CONNECT };
} catch (err) {
    console.log(err);
}