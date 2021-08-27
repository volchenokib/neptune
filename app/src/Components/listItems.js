import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import PeopleIcon from "@material-ui/icons/People";
import LogoutIcon from "@material-ui/icons/ExitToApp";

export const mainListItems = (
	<div>
		<ListItem button selected>
			<ListItemIcon>
				<HomeIcon />
			</ListItemIcon>
			<ListItemText primary="Models" />
		</ListItem>
		{/* <ListItem button>
			<ListItemIcon>
				<BusinessIcon />
			</ListItemIcon>
			<ListItemText primary="Booking Orders" />
		</ListItem> */}
		<ListItem button>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="Users" />
		</ListItem>
	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset></ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<LogoutIcon />
			</ListItemIcon>
			<ListItemText primary="Logout" />
		</ListItem>
	</div>
);
