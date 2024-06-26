const { PrismaClient } = require("@prisma/client");

let prisma;

const client = prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  prisma = client;
}

export default client;
