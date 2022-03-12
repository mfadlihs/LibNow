import { Button, Grid, InputBase, OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useEffect } from 'react';
import { Content, Jumbotron } from '../Component/HomeComp';
import { libAPI } from '../Config/api';
import { Container } from '../Layout/Container';
import Footer from '../Layout/Footer';
import { SearchNav } from '../Layout/SearchNav';

const primaryColor = '#898989';
const secondaryColor = '#E5E5E5';

const useStyles = makeStyles({
	container: {},
});

export default function Home() {
	const classes = useStyles();

	// const tes = async () => {
	// 	const res = await libAPI.get('/user/libraryinfo');
	// 	console.log(res.data['data : ']);
	// };
	// tes();

	const tes = async () => {
		const req = await libAPI.get('/user/libraryinfo');
		console.log(req.data);
	};

	tes();

	return (
		<div className={classes.container}>
			<SearchNav />
			<Jumbotron />
			<Container>
				<Content />
			</Container>
			<Footer />
		</div>
	);
}
