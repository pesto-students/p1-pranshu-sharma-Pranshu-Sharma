const {
  getCityData,
  getMultipleCitiesData,
} = require("../services/openWeatherService");

exports.getCity = (req, res) => {
  let responseData;
  if (!req.query.cityName) {
    responseData = {
      message: "Please provide city name!",
    };
    response.json(responseData);
  } else {
    getCityData(req, res);
  }
};

exports.getCities = (req, res) => {
  let responseData;
  if (!req.query.code) {
    responseData = {
      message: "Please provide city codes!",
    };
    response.json(responseData);
  } else {
    getMultipleCitiesData(req, res);
  }
};
