import fetchPostById from "../../../context/fetchPostById";
import { Formik, Form, Field, ErrorMessage } from "formik";
import updatePost from "../../../context/updatePost";

const EditPost = ({ post }) => {
	const { id, userId } = post;

	const initialValues = { title: post.title, body: post.body };
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={async values => {
					try {
						await updatePost({
							id,
							userId,
							title: values.title,
							body: values.body,
						});
						alert("post actualizado con exito");
					} catch (error) {
						throw new Error(error);
					}
				}}>
				<Form>
					<label htmlFor="title">title</label>
					<Field id="title" name="title" />

					<label htmlFor="body">Body</label>
					<Field id="body" name="body" />

					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};

export default EditPost;

export async function getServerSideProps({ query }) {
	const { id } = query;
	const post = await fetchPostById(id);
	return {
		props: { post },
	};
}
