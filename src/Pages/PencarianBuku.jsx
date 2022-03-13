import { makeStyles } from '@mui/styles';
import {
	Content,
	Popular,
	RatingTinggi,
	Rekomendasi,
} from '../Component/PencarianBukuComp';
import { Container } from '../Layout/Container';
import Footer from '../Layout/Footer';
import { SearchNav } from '../Layout/SearchNav';

const useStyles = makeStyles({
	container: {},
});

export function PencarianBuku() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<SearchNav />
			<Container>
				<Popular />
				<Rekomendasi />
				<RatingTinggi />
			</Container>
			<Footer />
		</div>
	);
}
