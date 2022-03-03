import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
	Content,
	DetailBukuNav,
	Details,
	Heading,
	ImageBook,
	Judul,
	Pinjam,
	Rating,
	Section,
} from '../Component/DetailBukuComp';
import { SearchNav } from '../Component/PencarianBukuComp';

const useStyles = makeStyles(theme => ({
	container: {},
}));

export default function DetailBuku() {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<DetailBukuNav />
			<Content>
				<ImageBook />
				<Details>
					<Heading>
						<Judul />
						<Rating />
					</Heading>
					<Section />
				</Details>
				<Pinjam />
			</Content>
		</Box>
	);
}
