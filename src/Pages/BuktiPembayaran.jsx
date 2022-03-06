import {
	Container,
	Content,
	Heading,
	Wrapper,
} from '../Component/BuktiPembayaranComp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
});

export default function BuktiPembayaran() {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Container>
				<Heading></Heading>
				<Wrapper>
					<Content />
				</Wrapper>
			</Container>
		</Box>
	);
}
