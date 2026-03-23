import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { config, requireEnv } from '../config/env';

const connectionString = requireEnv(config.dbConnectionString, "DATABASE_URL");

const adapter = new PrismaPg({ 
  connectionString
});

let dbClient: PrismaClient;

if (process.env.NODE_ENV === "production") {
  dbClient = new PrismaClient({ adapter });
} else {
  // @ts-ignore
  if (!global.__dbClient) {
    // @ts-ignore
    global.__dbClient = new PrismaClient({ adapter });
  }
  // @ts-ignore
  dbClient = global.__dbClient;
}

export { dbClient };
