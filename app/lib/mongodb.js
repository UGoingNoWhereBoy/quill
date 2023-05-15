import { MongoClient } from "mongodb";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable");
}

let clientPromise = null;

const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

clientPromise = client.connect().catch((err) => console.log(err));

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
