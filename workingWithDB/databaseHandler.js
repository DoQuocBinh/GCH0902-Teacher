const {MongoClient} = require('mongodb')

const DATABASE_URL = 'mongodb://tommy:123456abc@cluster0-shard-00-00.lkrga.mongodb.net:27017,cluster0-shard-00-01.lkrga.mongodb.net:27017,cluster0-shard-00-02.lkrga.mongodb.net:27017/GCH0901_DB?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin'
const DATABASE_NAME = 'GCH0901_DB'

//vi du obj la thong tin van insert, collection: ten cua bang can insert-vd Products
async function insertToDB(obj,collectionName){
    const client = await MongoClient.connect(DATABASE_URL);
    const dbo = client.db(DATABASE_NAME);
    const result = await dbo.collection(collectionName).insertOne(obj)
    console.log("Gia tri id moi duoc insert la: ", result.insertedId.toHexString());
}

async function getAll(collectionName){
    const client = await MongoClient.connect(DATABASE_URL);
    const dbo = client.db(DATABASE_NAME);
    const result = await dbo.collection(collectionName).find({}).toArray()
    return result
}

module.exports = {insertToDB,getAll}

