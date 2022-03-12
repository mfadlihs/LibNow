import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
	Content,
	Details,
	Heading,
	// ImageBook,
	// ImageBookContainer,
	Judul,
	Pinjam,
	Rating,
	Section,
} from '../Component/DetailBukuComp';
import { ImageBook } from '../Layout/ImageBook';
import { SearchNav } from '../Layout/SearchNav';

const useStyles = makeStyles(theme => ({
	container: {},
}));

export default function DetailBuku() {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<SearchNav />
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
