const { cities } = require("../data/cities");
const data = require("lodash");

const resolvers = {
  Query: {
    getAllCities: () => {
      return cities;
    },
    getAllCitiesByRegionCode: (_parent, { regionCode }) => {
      return data.filter(cities, { regionCode });
    },
    getAllCitiesByName: (_parent, { name }) => {
      return data.filter(cities, { name });
    },
    getAllCitiesByRegion: (_parent, { region }) => {
      return data.filter(cities, { region });
    },
  },
  Mutation: {
    createCity: (_parent, args) => {
      const city = args.input;
      cities.push(city);
      return city;
    },
  },
};

module.exports = { resolvers };
