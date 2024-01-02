'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let {UserId,Name,address,orderStatus,Store_id,MdValue,zwindex} = event
	return await db.collection("Order").add({
		UserId:UserId,
		Name:Name,
		address:address,
		orderStatus:orderStatus,
		Store_id:Store_id,
		MdValue:MdValue,
		zwindex:zwindex,
		posttime:Date.now(),
	})
};