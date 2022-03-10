import { Button, Grid, InputBase, OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useEffect } from 'react';
import {
	ButtonForm,
	Contact,
	Container,
	Content,
	Footer,
	FooterForm,
	InputForm,
	Jumbotron,
	Lainnya,
	Nav,
	Peminjaman,
} from '../Component/HomeComp';
import { libAPI } from '../Config/api';

const primaryColor = '#898989';
const secondaryColor = '#E5E5E5';

const useStyles = makeStyles({
	container: {},
});

export default function Home() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Nav />
			<Container>
				<Jumbotron />
				<Content />
			</Container>
			<Footer container columnSpacing={4}>
				<FooterForm />
				<Peminjaman />
				<Contact />
				<Lainnya />
			</Footer>
		</div>
	);
}
