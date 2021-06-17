const createPost = async ({ title, body, userId }) => {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts",
			{
				method: "POST",
				body: JSON.stringify({
					title,
					body,
					userId: 1,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}
		);
		return await response.json();
	} catch (error) {
		throw new Error(error);
	}
};

export default createPost;
