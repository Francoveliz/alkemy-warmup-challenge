import fetchPostById from "../../context/fetchPostById";

const Details = ({ post }) => {
	return (
		<>
			{post.title ? (
				<div>
					<p>
						<span className="fw-bold text-primary">Title: </span>
						<span>{post.title}</span>
					</p>

					<p>
						<span className="fw-bold text-primary">Body: </span>
						<span>{post.body}</span>
					</p>

					<p>
						<span className="fw-bold text-primary">User Id: </span>
						<span>{post.userId}</span>
					</p>

					<p>
						<span className="fw-bold text-primary">Id: </span>
						<span>{post.id}</span>
					</p>
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
