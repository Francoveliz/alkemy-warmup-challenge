const updatePost = async ({ id, title, body, userId }) => {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`,
			{
				method: "PUT",
				body: JSON.stringify({
					id: id,
					title: title,
					body: body,
					userId: userId,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default updatePost;
