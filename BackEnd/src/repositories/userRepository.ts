import { dbClient } from "../lib/prisma";

export const userRepository = {
  async findByUserName(user_name: string) {
    return dbClient.user.findUnique({ where: { user_name } });
  },

  async findManyByIds(ids: string[]) {
    return dbClient.user.findMany({
      where: { id: { in: ids } },
      select: {
        id: true,
        user_name: true,
        first_name: true,
        last_name: true,
      },
    });
  },
};
