const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectAndFetchData(database, collection) {
    try {
        await client.connect();
        const db = client.db(database);
        const col = db.collection(collection);
        let data = await col.find({}).toArray();
        return data;
    } finally {
        await client.close();
    }
}
