const fetchApi = require('../../../utils/fetchApi/index')
module.exports = async function (macAddress, facility) {
    try {
        const { data, error } = await fetchApi.get('/devices')
        return data
    }
    catch (err) {
        throw err
    }

}