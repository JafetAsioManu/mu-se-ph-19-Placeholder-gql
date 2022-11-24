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
    # not sure with this
    body_state: [Body_State]
    sleep_log: [Sleep_Log]
  }
  type Sleep_Log {
    id: ID
    userId: ID # check if needed?
    dateOfSleep: String
    sleepStart: String
    sleepEnded: String
    aveSp02: Int
    aveHeartRate: Int
    maxHeartRate: Int
    sleepDuration: Int
    remSleepDuration: Int
    sleepLevel: Int
    timeInBed: String
  }
  type Body_State {
    id: ID
    userId: ID # check if needed?
    steps: String
    intensity: Int
    datetime: String
  }
  #MUTATION

  type Mutation {
    createUser(input: CreateUserRequest!): CreateUserResponse
  }
  input CreateUserRequest {
    id: ID
    firstname: String
    lastname: String
    password: String
    username: String
    age: Int
  }
  type CreateUserResponse {
    user: Users
  }
`;

module.exports = typeDefs;
