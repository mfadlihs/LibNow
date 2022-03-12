import {
	Container,
	Content,
	Heading,
	Reminder,
	Wrapper,
} from '../Component/BuktiPeminjamanComp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { SearchNav } from '../Layout/SearchNav';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'center',
		padding: '0 10px',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: '#f5f5f5',
	},
});

export default function BuktiPembayaran() {
	const classes = useStyles();

	return (
		<>
			<SearchNav />
			<Box className={classes.container}>
				<Container>
					<Heading></Heading>
					<Wrapper>
						<Content />
						<Reminder />
					</Wrapper>
				</Container>
			</Box>
		</>
	);
}
