import mongoose from "mongoose";

const connections: any = [];

// Export the getConnection function for server-side components
export default function getConnection(dbIndex: number = 0) {
  if (connections[dbIndex]) return connections[dbIndex];

  const config = useRuntimeConfig();
  const { mongoUrls } = config;

  try {
    const connection = mongoose.createConnection(mongoUrls[dbIndex]);

    connection.on("connected", () => {
      console.log("Database connected:", dbIndex);
    });

    connection.on("error", (err) => {
      console.error("Database connection error:", err);
    });

    connection.on("disconnected", () => {
      console.log("Database disconnected:", dbIndex);
    });

    // If you need to perform some action when the connection is closed, you can use 'close' event.
    connections[dbIndex] = connection;
    return connection;
  } catch (error) {
    console.error("Error creating database connection:", error);
  }
}
