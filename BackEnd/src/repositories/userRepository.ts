import { dbClient } from "../lib/prisma";

export const userRepository = {
  async findByUserName(user_name: string) {
    return dbClient.user.findUnique({ where: { user_name } });
  },
};
