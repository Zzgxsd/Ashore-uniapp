'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	return await db.collection("StoreList").get()
};
