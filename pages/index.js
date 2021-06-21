import { ListItem } from "../components";
import fetchPosts from "../context/fetchPosts";

export default function Home({ posts }) {
	return (
		<div>
			<div>
				{posts.map(post => (
					<div className="mb-3">
						<ListItem key={post.id} {...post} />
					</div>
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
