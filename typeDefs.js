const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users(id: ID!): Users
  }
  type Users {
    id: ID
    firstname: String
    lastname: String
    password: String
    username: String
    age: Int
    walkingAverage: String
    # not sure with this
    activity: [Activity]
    sleep: [Sleep]
  }
  type Sleep {
    id: ID
    userId: ID # check if needed?
    sleepStart: String
    sleepEnded: String
    oxygenSaturation: String
    avgHeartRate: String
    maxHeartRate: String
    sleepHours: String
    remSleep: String
    sleepLevel: Int
    datetime: String
  }
  type Activity {
    id: ID
    userId: ID # check if needed?
    steps: String
    intensity: String
    oxygenSaturation: String
    datetime: String
  }
`;

module.exports = typeDefs;
