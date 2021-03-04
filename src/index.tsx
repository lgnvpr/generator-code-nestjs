import { ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./rematch/store";
import reportWebVitals from "./reportWebVitals";
import theme from "./style/theme"

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);

reportWebVitals();
