import React from "react";
import createPost from "../../context/createPost";
import { Formik, Form, Field } from "formik";

const NewPost = () => {
	const initialValues = { title: "", body: "" };

	const handleSubmit = async values => {
		try {
			await createPost({ title: values.title, body: values.body });
			alert("post creado con exito");
		} catch (error) {
			throw new Error(error);
		}
	};

	const validate = values => {
		const errors = {};

		if (!values.title) {
			errors.title = "Campo obligatorio";
		}

		if (!values.body) {
			errors.body = "Campo obligatorio";
		}

		return errors;
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={values => handleSubmit(values)}
				validate={values => validate(values)}>
				{({ errors }) => (
					<Form>
						<div className="mb-3">
							<label
								htmlFor="title"
								className="form-label text-primary fw-bold">
								Title
							</label>
							<Field id="title" name="title" className="form-control" />
							{errors.title && (
								<p className="form-text text-danger">{errors.title}</p>
							)}
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
							{errors.body && (
								<p className="form-text text-danger">{errors.body}</p>
							)}
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default NewPost;
