'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let {UserId,onchange} = event
	const result = await db.collection('Order').where({
		_id:UserId
	}).update({
		orderStatus:onchange
	});
	return {
		code: 200,
		message: '更新成功',
		data: result
	};
};
