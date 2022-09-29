const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const { weatherApiBaseUrl, weatherApiKey } = require("../config/config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

exports.getForecastData = (request, response) => {
  let responseData;
  const url = `${weatherApiBaseUrl}?key=${weatherApiKey}&q=${request.query.city}&days=${request.query.days}`;
  axios
    .get(url)
    .then((res) => {
      responseData = res.data;
      response.json(responseData);
    })
    .catch((error) => {
      responseData = {
        code: error.code,
        message: error.message,
      };
      response.json(responseData);
    });
};
