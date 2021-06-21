import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import getToken from "../../context/getToken";
import { useAppContext } from "../../context/context";

const Login = () => {
	const initialValues = { email: "", password: "" };
	const { setUserIsLogged } = useAppContext();

	const handleSubmit = async ({ email, password }) => {
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
			console.log(error);
		}
	};

	return (
		<>
			<div className="w-50 d-flex justify-content-center align-items-center">
				<Formik
					initialValues={initialValues}
					onSubmit={values => handleSubmit(values)}>
					<Form>
						<div>
							<label htmlFor="email" className="form-label">
								email
							</label>
							<Field id="email" name="email" className="form-control" />
						</div>
						<div>
							<label htmlFor="password" className="form-label">
								password
							</label>
							<Field
								type="password"
								id="password"
								name="password"
								className="form-control"
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Enviar
						</button>
					</Form>
				</Formik>
			</div>
		</>
	);
};

export default Login;
