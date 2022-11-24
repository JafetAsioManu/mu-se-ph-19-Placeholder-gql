const fetch = require('node-fetch')
const API_URL = 'http://localhost:3001/'
const Query = {

    employees: async (parents, args, context, info )=>
    {
        const {id} = args;
        const res = await fetch(`${API_URL}api/v1/employees/${id}`);
        const data = await res.json();
        return data;
    },

}
module.exports = { Query };