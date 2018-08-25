const express = require('express')
const axios = require('axios')
const app = express()

app.get("/cors", (request, response) => {
  console.log(request.query.url);
  axios.get(request.query.url)
    .then(res => res.data)
    .then(data => response.json(data))
    .catch(error => console.log(error));
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
