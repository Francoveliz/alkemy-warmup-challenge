import { ListItem } from "../components";
import fetchPosts from "../context/fetchPosts";

export default function Home({ posts }) {
	return (
		<div>
			<div className="d-grid gap-3 ">
				{posts.map(post => (
					<ListItem key={post.id} {...post} />
				))}
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const posts = await fetchPosts();
	return {
		props: { posts },
	};
}
