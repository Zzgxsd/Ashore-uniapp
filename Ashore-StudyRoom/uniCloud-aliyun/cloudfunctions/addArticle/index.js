const db = uniCloud.database()
exports.main = async (event, context) => {
	let {artObj} = event
	return await db.collection("article").add({
		posttime:Date.now(),
		...artObj
	})
};
