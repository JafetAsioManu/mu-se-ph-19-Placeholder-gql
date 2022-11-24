// const users = require("./data");
const fetch = require("node-fetch");
const API_URL = "http://localhost:5001/v1";

const Query = {
  users: async (parents, args, context, info) => {
    const { token } = context;
    const response = await fetch(`${API_URL}/users/lists`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
  sleepLogs: async (parents, args, context, info) => {
    const { token } = context;
    const {userId} = args
    const response = await fetch(`${API_URL}/sleepLogs?userId=${userId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
  bodyStates: async (parents, args, context, info) => {
    const { token } = context;
    const { userId } = args;
    const response = await fetch(`${API_URL}/bodyStates?userId=${userId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    const data = await response.json();
    console.log(data);
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
