const fetch = require('node-fetch')
const API_URL = 'http://localhost:3001/'
const Query = {
    users: async (parents, args, context, info )=>
    {
        const {id} = args;
        const res = await fetch(`${API_URL}api/v1/employees/${id}`); // change to REST API endpoint
        const data = await res.json();
        return data;
    },
}
const Sleep = {
    id: async (parents, args, context, info )=>
    {
    },
    userId: async (parents, args, context, info )=>
    {
    },
    sleepStart: async (parents, args, context, info )=>
    {
    },
    sleepEnded: async (parents, args, context, info )=>
    {
    },
    oxygenSaturation: async (parents, args, context, info )=>
    {
    },
    avgHeartRate: async (parents, args, context, info )=>
    {
    },
    maxHeartRate: async (parents, args, context, info )=>
    {
    },
    sleepHours: async (parents, args, context, info )=>
    {
    },
    remSleep: async (parents, args, context, info )=>
    {
    },
    sleepLevel: async (parents, args, context, info )=>
    {
    },
    datetime: async (parents, args, context, info )=>
    {
    },
    
}
const Activity = {
    id: async (parents, args, context, info )=>
    {
    },
    userId: async (parents, args, context, info )=>
    {
    },
    steps: async (parents, args, context, info )=>
    {
    },
    intensity: async (parents, args, context, info )=>
    {
    },
    oxygenSaturation: async (parents, args, context, info )=>
    {
    },
    datetime: async (parents, args, context, info )=>
    {
    },
}

module.exports = { Query };