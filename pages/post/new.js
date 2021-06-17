import React from "react";
import createPost from "../../context/createPost";
import { Formik, Form, Field } from "formik";

const NewPost = () => {
	const initialValues = { title: "", body: "" };
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={async values => {
					try {
						await createPost({ title: values.title, body: values.body });
						alert("post creado con exito");
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

export default NewPost;
