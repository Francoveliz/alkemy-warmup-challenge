const deletePost = async id => {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`,
			{
				method: "DELETE",
			}
		);
		return await response.json();
	} catch (error) {
		throw new Error(error);
	}
};

export default deletePost;
