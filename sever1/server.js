const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();

const port = 3070;

const url = "mongodb://localhost:27017";
const dbName = "Humans";

// Connect to MongoDB
async function fetchData(collectionName) {
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find({}).toArray();
    console.log("Data fetched from MongoDB:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
    throw error;
  } finally {
    await client.close();
  }
}

// Handle root route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.get("/api", (req, res) => {
  res.json([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ]);
});

app.get("/api2", (req, res) => {
  res.json([
    { name: "David", age: 40 },
    { name: "Eve", age: 45 },
    { name: "Frank", age: 50 },
  ]);
});

app.get("/apiMongo", async (req, res) => {
  try {
    const data = await fetchData("humans");
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data from MongoDB");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
