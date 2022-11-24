const users = require("./data");
// const fetch = require("node-fetch");
// const API_URL = "http://localhost:3001/";

const Query = {
  users: async (parents, args, context, info) => {
    const { id } = args;
    const res = users.users.find((_id) => _id.id === id);
    const data = res;
    return data;
  },
};
const Users = {
  sleep_log: (parents, args, context, info) => {
    const { id: userId } = parents;
    const sleep_log = users.sleep_log.find((_id) => _id.userId === userId);

    return sleep_log;
  },
  body_state: (parents, args, context, info) => {
    const { id: userId } = parents;
    const body_state = users.body_state.find((_id) => _id.userId === userId);

    return body_state;
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
