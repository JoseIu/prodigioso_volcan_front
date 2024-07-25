export const fetchApi = async (token: string) => {
	const BACK_END_URL = import.meta.env.VITE_BACK_URL;

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await fetch(`${BACK_END_URL}/login-google`, fetchOptions);

	console.log(response);
};
