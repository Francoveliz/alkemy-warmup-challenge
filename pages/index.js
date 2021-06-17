import { useEffect, useState } from "react";
import { ListItem } from "../components";
import { useAppContext } from "../context/context";

export default function Home() {
	const { fetchPosts } = useAppContext();
	const [posts, setPosts] = useState([]);

	const setUpPosts = async () => {
		const data = await fetchPosts();
		setPosts(data);
	};

	useEffect(() => {
		setUpPosts();
	}, []);

	return (
		<div>
			<div className="d-grid gap-3 my-5">
				{posts.map(post => (
					<ListItem key={post.id} {...post} />
				))}
			</div>
		</div>
	);
}
