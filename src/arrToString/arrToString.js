const arrToString = (arr) => {
	return arr
		.filter(item => item !== null && item !== undefined && Number.isInteger(item))
		.map(String)
}

module.exports = arrToString