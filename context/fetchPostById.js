const fetchPostById = async id => {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		const data = response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default fetchPostById;
