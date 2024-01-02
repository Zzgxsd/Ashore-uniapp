'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let {namekey} = event;
	// return namekey
	// 只获取一条数据
	return await db.collection("User").where({
		'user_name':namekey
	}).get();
};

