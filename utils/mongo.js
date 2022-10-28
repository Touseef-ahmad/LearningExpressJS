const { MongoClient } = require("mongodb");
// const connectionString = process.env.ATLAS_URI;
const connectionString = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0'
const client = new MongoClient(connectionString);

// TODO: Handle this gracefully
const getDB = async () => {
    await client.connect();
    return client.db('test');
}

module.exports = {
    getDB,
};