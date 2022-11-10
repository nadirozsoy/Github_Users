const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', (req, res) => {
  //endpoint adı / olacak

  //burada githuba istek gönderiyoruz
  axios.get('https://api.github.com/users/nadirozsoy').then((response) => {
    res.send({
      success: true,
      data: response.data,
    })
  })
})

app.listen(3007, () => {
  console.log('Server is running on port 3000')
})
