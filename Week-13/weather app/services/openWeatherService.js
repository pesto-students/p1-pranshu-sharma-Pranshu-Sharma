const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const { openWeatherKey, openWeatherBaseUrl } = require("../config/config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

exports.getCityData = (request, response) => {
  let responseData;
  const url = `${openWeatherBaseUrl}/weather?q=${request.query.cityName}&appid=${openWeatherKey}`;
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

exports.getMultipleCitiesData = (request, response) => {
  const url = `${openWeatherBaseUrl}/group?id=${request.query.code}&appid=${openWeatherKey}`;
  axios
    .get(url)
    .then((res) => {
      const data = res.data;
      let responseData;
      if (!request.query.limit) {
        responseData = {
          total: data.list.length,
          data: data.list,
        };
      } else {
        const numberOfPages = Math.ceil(data.cnt / request.query.limit);
        offset = request.query.page
          ? (request.query.page - 1) * request.query.limit
          : 0;
        dataToBeReturned = data.list.slice(
          offset,
          offset + request.query.limit
        );
        responseData = {
          noOfPages: numberOfPages,
          totalCount: data.list.length,
          page: request.query.page ? request.query.page : 1,
          limit: request.query.limit,
          data: dataToBeReturned,
        };
      }
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
