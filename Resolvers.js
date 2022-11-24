const users = require("./data");
const fetch = require("node-fetch");
const API_URL = "http://localhost:3001/";

const Query = {
  users: async (parents, args, context, info) => {
    const { id } = args;
    const res = users.users.find((_id) => _id.id === id);
    const data = res;
    return data;
  },
};
const Users = {
  sleep_log: async (parents, args, context, info) => {
    const { id: userId } = parents;
    const res = users.sleep_log.find((_id) => _id.userId === userId);

    const usrID = res.map((x) => {
      return { user_id: x.userId };
    });

    const uniqueIds = [...new Set(usrID.map((id) => id.user_id))];

    const userPromises = uniqueIds.map(async (id) => {
      return await (
        await users.sleep_log.find((_id) => _id.userId === id)
      ).json();
    });

    const user = await Promise.all(userPromises);

    return user;
  },
};

const Mutation = {
  createUser: async (parents, args, context, info) => {
    const input = args.input;
    return {
      user: {
        id: "6565",
        ...input,
      },
    };
  },
};

module.exports = { Query, Mutation, Users };
