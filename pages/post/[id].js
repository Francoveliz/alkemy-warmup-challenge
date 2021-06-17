import fetchPostById from "../../context/fetchPostById";

const Details = ({ post }) => {
	return (
		<>
			{post.title ? (
				<div>
					<p>{`Title: ${post.title}`}</p>
					<p>{`Body: ${post.body}`}</p>
					<p>{`User id: ${post.userId}`}</p>
					<p>{`Post id: ${post.id}`}</p>
				</div>
			) : (
				<>
					<h1>Post no encontrado </h1>
				</>
			)}
		</>
	);
};

export default Details;

export async function getServerSideProps({ query }) {
	const { id } = query;
	const post = await fetchPostById(id);
	return {
		props: { post },
	};
}
