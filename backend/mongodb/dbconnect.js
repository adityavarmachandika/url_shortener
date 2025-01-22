const { MongoClient}  = require('mongodb');

const connectDB = async () => {
  try {
    const client = new MongoClient("mongodb://localhost:27017/url_shortener"  );

    await client.connect();
    console.log('MongoDB Connected');
    return client; 
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
