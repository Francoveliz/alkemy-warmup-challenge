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
		</>
	);
};

export default NewPost;
