import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

export default function BasicTable(props) {
	const classes = useStyles();
	console.log("props", props);

	const rows = props.prop;

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="left">Description</TableCell>
						<TableCell align="left">Type</TableCell>
						<TableCell align="left">labels</TableCell>
						<TableCell align="left">Created</TableCell>
						<TableCell align="left">Last Updated</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							{/* <TableCell component="th" scope="row">
								{row.name}
							</TableCell> */}
							<TableCell align="left">{row.name}</TableCell>
							<TableCell align="left">{row.description}</TableCell>
							<TableCell align="left">{row.type}</TableCell>
							<TableCell align="left">{row.labels}</TableCell>
							<TableCell align="left">{row.created}</TableCell>
							<TableCell align="left">{row.lastUpdated}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
