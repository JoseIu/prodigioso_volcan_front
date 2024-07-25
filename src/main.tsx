import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";

const clienID = import.meta.env.VITE_ID_CLIENT;
console.log({ clienID });
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<GoogleOAuthProvider clientId={clienID}>
				<App />
			</GoogleOAuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
