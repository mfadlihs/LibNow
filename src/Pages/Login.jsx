import { styled } from '@mui/system';
import {
	Box,
	Button,
	CircularProgress,
	Input,
	TextField,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
	ImageSide,
	Wrapper,
	WrapperLogin,
	Container,
	Header,
	InputForm,
	NavigateButton,
} from '../Component/LoginComp';
import { Label } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalButton, GlobalLink } from '../Theme/GlobalTheme';
import {
	primary,
	secondary,
	tertiary,
	textPrimary,
	textSecondary,
} from '../Theme/GlobalTheme';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { libAPI } from '../Config/api';
import { useAuth } from '../Config/Auth';

const useStyles = makeStyles({
	imageSide: {
		backgroundColor: '#898989',
		height: '100%',
	},
	loginContainer: {
		display: 'flex',
		height: '100vh',
	},
	header: {
		textAlign: 'center',
	},
	link: {
		color: secondary,
	},
});

export default function Login() {
	const classes = useStyles();
	const navigate = useNavigate();
	const { SetAndGetToken } = useAuth();

	const [forms, setForms] = useState({ emailorphonenumber: '', password: '' });

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleLogin = async e => {
		e.preventDefault();
		setIsLoading(true);
		isError && setIsError(false);
		try {
			const loginRes = await libAPI.post('/user/login', {
				...forms,
			});
			setIsLoading(false);

			// Jika berhasil Login, maka ambil token dan username nya untuk kemudian disimpan pada localStorage
			const token = loginRes.data.Token;
			const id = loginRes.data.id;

			SetAndGetToken(token, id);
			navigate('/');
		} catch (error) {
			console.log(error);
			setTimeout(() => {
				setIsError(true);
				setIsLoading(false);
				setTimeout(() => {
					setIsError(false);
				}, 3000);
			}, 1500);
		}
	};

	return (
		<Container className='container'>
			<ImageSide />
			<Wrapper
				px={['25px', '50px', '50px', '192px']}
				flexBasis={['100%', '80%', '65%']}
			>
				<WrapperLogin>
					<form id='login' onSubmit={handleLogin} autoComplete='off'>
						<Header>
							<Typography
								className={classes.header}
								color='textPrimary'
								variant='h2'
								fontSize={['40px', '47px']}
							>
								Masuk ke LibNow
							</Typography>
						</Header>
						<Typography gutterBottom variant='h4'>
							E-mail/No HP
						</Typography>
						<InputForm
							variant='outlined'
							fullWidth
							type='email'
							placeholder='Masukkan e-mail atau No.HP'
							color='primary'
							required
							onChange={e => {
								setForms(() => ({
									...forms,
									emailorphonenumber: e.target.value,
								}));
							}}
						/>
						<Typography gutterBottom variant='h4'>
							Password
						</Typography>
						<InputForm
							sx={{ marginBottom: '2px' }}
							type='password'
							required
							variant='outlined'
							fullWidth
							placeholder='Masukkan Password'
							onChange={e => {
								setForms(() => ({
									...forms,
									password: e.target.value,
								}));
							}}
						/>
						<Typography
							sx={{ marginBottom: '20px' }}
							variant='body2'
							align='right'
						>
							Lupa Password?
						</Typography>
						{isError && <LoginError />}
						{isLoading && <LoginLoading />}
						<NavigateButton>
							<Typography variant='body1'>
								Belum Punya akun?{' '}
								<GlobalLink sx={{ color: secondary }} to='/signup'>
									Daftar
								</GlobalLink>
							</Typography>
							<GlobalButton
								type='submit'
								form='login'
								color='tertiary'
								variant='contained'
							>
								MASUK
							</GlobalButton>
						</NavigateButton>
					</form>
				</WrapperLogin>
			</Wrapper>
		</Container>
	);
}

export const LoginError = ({ message }) => {
	return (
		<Typography marginBottom='15px' textAlign='center' color='error'>
			Wrong email or password !
		</Typography>
	);
};

export const LoginLoading = () => {
	return (
		<Box width='min-content' margin='auto' marginBottom='15px'>
			<CircularProgress color='secondary' />
		</Box>
	);
};
