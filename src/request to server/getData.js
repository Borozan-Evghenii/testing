const axios = require('axios')
const arrToString = require('../arrToString/arrToString')

const getData = async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/users');
	const userId = response.data.map(item => item.id)
	return arrToString(userId)
}


module.exports = getData;