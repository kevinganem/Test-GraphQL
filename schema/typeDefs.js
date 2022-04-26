const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type City {
    name: String!
    zipCode: Int!
    regionCode: Int!
    population: Int!
    mayor: String!
    area: Int!
    region: String!
    department: String!
  }

  input CreateCity {
    name: String!
    zipCode: Int!
    regionCode: Int!
    population: Int!
    mayor: String!
    area: Int!
    region: String!
    department: String!
  }

  # QUERIES

  type Query {
    getAllCities: [City!]!
    getAllCitiesByRegionCode(regionCode: Int!): [City!]!
    getAllCitiesByName(name: String!): [City!]!
    getAllCitiesByRegion(region: String!): [City!]!
  }

  # MUTATIONS

  type Mutation {
    createCity(input: CreateCity!): City
  }
`;

module.exports = { typeDefs };
