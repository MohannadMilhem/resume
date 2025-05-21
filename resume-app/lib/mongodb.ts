import { MongoClient } from "mongodb";

const db_uri = process.env.DB_URL;
let client: MongoClient;

if (!db_uri) {
  throw new Error("Please define the database URI");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(db_uri);
  global._mongoClientPromise = client.connect();
}
const clientPromise = global._mongoClientPromise;
export default clientPromise;
