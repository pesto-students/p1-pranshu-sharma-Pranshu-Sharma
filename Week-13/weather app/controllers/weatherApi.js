const { getForecastData } = require("../services/weatherApiService");

exports.getForecast = (req, res) => {
  let responseData;
  if (!req.query.city) {
    responseData = {
      message: "Please provide city name!",
    };
    response.json(responseData);
  } else if (!req.query.days) {
    responseData = {
      message: "Please provide no. of days!",
    };
    response.json(responseData);
  } else {
    getForecastData(req, res);
  }
};
