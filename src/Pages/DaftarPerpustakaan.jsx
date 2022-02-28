import { makeStyles } from '@mui/styles';
import { CardLibrary, Content } from '../Component/DaftarPerpustakaanComp';
import { Nav } from '../Component/HomeComp';

const useStyles = makeStyles({
	container: {},
});

export default function DaftarPerpustakaan() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Nav />
			<Content>
				{[1, 2, 3, 4, 5, 6].map(i => (
					<CardLibrary />
				))}
			</Content>
		</div>
	);
}
