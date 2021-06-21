import axios from "axios";

const getToken = async ({ email, password }) => {
	try {
		const response = await axios.post(
			"http://challenge-react.alkemy.org/",
			{
				email: email,
				password: password,
			}
		);
		const token = await response.data.token;
		return token;
	} catch (error) {
		throw new Error(error);
	}
};

export default getToken;
