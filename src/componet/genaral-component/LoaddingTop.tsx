import { LinearProgress, makeStyles } from "@material-ui/core";
import { ActionRematch, AppState } from "@rematch/index";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	load: {
		position: "fixed",
		top: 64,
		left: 0,
		width: "100%",
	},
}));
export default function AppLoadingTop() {
	const [loading, setLoading] = useState(true);
	const classes = useStyles();

	const loadingTop: boolean = useSelector(
		(state: AppState) => state.loadingTop
	);
	useEffect(() => {
		if (loading !== loadingTop) {
			setLoading(loadingTop);
		}
	}, [loadingTop]);
	return (
		<div className={classes.load}>
			<LinearProgress color="secondary" hidden={!loading} />
		</div>
	);
}
