const router = require("express").Router();
const { getCity, getCities } = require("../controllers/openWeather");
const { getForecast } = require("../controllers/weatherApi");

router.route("/weather/city").get(getCity);

router.route("/weather/cities").get(getCities);

router.route("/weather/forecast").get(getForecast);

module.exports = router;
