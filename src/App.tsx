import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { UserProfile } from "./pages/UserProfile";

export const App = () => {
	return (
		<>
			<Routes>
				<Route index path="login" element={<LoginPage />} />
				<Route path="user-profile" element={<UserProfile />} />

				<Route path="*" element={<Navigate to="login" />} />
			</Routes>
		</>
	);
};
