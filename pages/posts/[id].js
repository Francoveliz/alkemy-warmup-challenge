import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fetchPostById from "../../context/fetchPostById";

const Details = () => {
	//get id from the params
	const router = useRouter();
	const { id } = router.query;
	const [post, setPost] = useState();

	const handleFetchPostById = async () => {
		try {
			const data = await fetchPostById(id);
			console.log(data);
			setPost(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleFetchPostById();
	}, []);

	return (
		<>
			{post && (
				<div>
					<p>{`Title: ${post.title}`}</p>
					<p>{`Body: ${post.body}`}</p>
					<p>{`User id: ${post.userId}`}</p>
					<p>{`Post id: ${post.id}`}</p>
				</div>
			)}
		</>
	);
};

export default Details;
