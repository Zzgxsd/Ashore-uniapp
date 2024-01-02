'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let {id} = event;
	// 只获取一条数据
	return await db.collection("StoreList").doc(id).get();
};
