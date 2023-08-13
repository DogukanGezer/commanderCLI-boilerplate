const axios = require('axios')

const fetchApi = axios.create({
    baseURL: process.env.FETCH_API,
    timeout: 1000,
    silent: true
})



module.exports = fetchApi