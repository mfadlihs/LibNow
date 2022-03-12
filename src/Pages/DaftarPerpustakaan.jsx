import { AssuredWorkloadSharp } from '@mui/icons-material';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { libAPI } from '../Config/api';
// import { Content } from '../Component/DaftarPerpustakaanComp';
import { CardLibrary } from '../Layout/CardLibrary';
import { Container } from '../Layout/Container';
import Footer from '../Layout/Footer';
import { SearchNav } from '../Layout/SearchNav';
import { GlobalLink } from '../Theme/GlobalTheme';

// import { SearchNav } from '../Component/PencarianBukuComp';

const useStyles = makeStyles({
	container: {},
});

export default function DaftarPerpustakaan() {
	const classes = useStyles();
	const [data, setData] = useState([]);

	const reqLibararyInfo = async () => {
		const req = await libAPI.get('/user/libraryinfo');
		setData(req.data.data);
	};
	reqLibararyInfo();

	return (
		<Box className={classes.container}>
			<SearchNav />
			<Container>
				{data.map((data, index) => (
					<CardLibrary data={data} key={index} />
				))}
			</Container>
			<Footer />
		</Box>
	);
}
