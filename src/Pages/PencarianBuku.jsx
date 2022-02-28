import { makeStyles } from '@mui/styles';
import { CardLibrary } from '../Component/DaftarPerpustakaanComp';
import {
	Content,
	Popular,
	RatingTinggi,
	Rekomendasi,
	SearchNav,
} from '../Component/PencarianBukuComp';

const useStyles = makeStyles({
	container: {},
});

export function PencarianBuku() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<SearchNav />
			<Content>
				<Popular />
				<Rekomendasi />
				<RatingTinggi />
			</Content>
		</div>
	);
}
