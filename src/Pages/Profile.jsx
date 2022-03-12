import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';
import { AccountNav, Container } from '../Component/ProfileComp';
import { SearchNav } from '../Layout/SearchNav';

const useStyles = makeStyles({
	outlet: {
		height: '100%',
	},
});

export default function Profile() {
	const classes = useStyles();
	return (
		<>
			<SearchNav />
			<Container>
				<AccountNav />
				<Box sx={{ height: '80vh', flexGrow: 1 }}>
					<Outlet />
				</Box>
			</Container>
		</>
	);
}
