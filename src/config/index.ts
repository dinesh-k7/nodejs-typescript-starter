import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (!envFound) {
    throw new Error("Couldn't find .env file");
}

export default {
    api: {
        prefix: "/api",
    },
    databaseURL: process.env.MONGODB_URI || "mongodb://localhost/playground",
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.port || 6000,
};
