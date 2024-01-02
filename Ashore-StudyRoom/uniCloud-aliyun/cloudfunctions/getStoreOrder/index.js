'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let {UserId} = event;
	// 只获取一条数据
	return await db.collection("Order").where({
		UserId:UserId
	}).get();
};