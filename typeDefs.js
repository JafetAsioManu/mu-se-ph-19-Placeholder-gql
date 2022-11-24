const {gql} = require('apollo-server');

const typeDefs = gql`
    """
    EMPLOYEES
    """
    type Query 
    {
        employees(id:ID!): Employees
    }
    type Employees 
    {
        id:ID!
        name:String
        dob: String
        department:String
        title:String
        avatarUrl:String
    }

    `;

module.exports = typeDefs;