'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let {UserId,changeNN} = event
	// 更新操作
	try {
		const result = await db.collection('User').where({
			user_name:UserId
		}).update({
			Nickname:changeNN
		});
		return {
			code: 200,
			message: '更新成功',
			data: result
		};
	} catch (error) {
		return {
			code: 500,
			message: '更新失败',
			data: error
		};
	}
};