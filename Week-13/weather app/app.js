const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes/allRoutes.js')

app.use(router)

app.listen(PORT, () =>
  console.log(`App listening on PORT ${PORT}!`)
);
