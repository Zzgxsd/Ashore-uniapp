'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let {detail} = event
	return detail
};
