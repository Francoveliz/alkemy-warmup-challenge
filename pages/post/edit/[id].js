import fetchPostById from "../../../context/fetchPostById";
import { Formik, Form, Field, ErrorMessage } from "formik";
import updatePost from "../../../context/updatePost";

const EditPost = ({ post }) => {
	const { id, userId } = post;

	const initialValues = { title: post.title, body: post.body };
	return (
		<>
			{post.title ? (
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
						<div className="mb-3">
							<label
								htmlFor="title"
								className="form-label text-primary fw-bold">
								Title
							</label>
							<Field id="title" name="title" className="form-control" />
						</div>
						<div className="mb-3 h-50">
							<label
								htmlFor="body"
								className="form-label text-primary fw-bold">
								Body
							</label>
							<Field
								as="textarea"
								id="body"
								name="body"
								className="form-control "
								style={{ height: "20rem" }}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</Form>
				</Formik>
			) : (
				<h1>Post no encontrado </h1>
			)}
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
