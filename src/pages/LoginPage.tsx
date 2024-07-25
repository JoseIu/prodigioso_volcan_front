import { GoogleLogin } from "@react-oauth/google";
export const LoginPage = () => {
	return (
		<div>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					console.log(credentialResponse);
				}}
				onError={() => {
					console.log("Login Failed");
				}}
			/>
		</div>
	);
};
