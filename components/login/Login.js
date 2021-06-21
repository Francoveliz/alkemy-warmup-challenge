import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import getToken from "../../context/getToken";
import { useAppContext } from "../../context/context";

const Login = () => {
	const initialValues = { email: "", password: "" };
	const { setUserIsLogged } = useAppContext();

	const handleSubmit = async ({ email, password }, setErrors) => {
		try {
			const token = await getToken({
				email: email,
				password: password,
			});

			if (token === process.env.NEXT_PUBLIC_TOKEN) {
				localStorage.setItem("token", token);
				setUserIsLogged(true);
			}
		} catch (error) {
			console.log(
				setErrors({ general: "Email o contraseña incorrectos" })
			);
			console.log(error);
		}
	};

	const validate = values => {
		const errors = {};

		if (!values.email) {
			errors.email = "Campo obligatorio";
		}

		if (!values.password) {
			errors.password = "Campo obligatorio";
		}

		return errors;
	};

	return (
		<>
			<div className="w-50 d-flex justify-content-center align-items-center">
				<Formik
					initialValues={initialValues}
					onSubmit={(values, { setErrors }) =>
						handleSubmit(values, setErrors)
					}
					validate={values => validate(values)}>
					{({ errors }) => (
						<Form>
							<div>
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<Field id="email" name="email" className="form-control" />
								{errors.email && (
									<p className="form-text text-danger">{errors.email}</p>
								)}
							</div>
							<div>
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<Field
									type="password"
									id="password"
									name="password"
									className="form-control"
								/>
								{errors.password && (
									<p className="form-text text-danger">
										{errors.password}
									</p>
								)}
								{errors.general && (
									<p className="form-text text-danger">{errors.general}</p>
								)}
							</div>
							<button type="submit" className="btn btn-primary">
								Enviar
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default Login;
