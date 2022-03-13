import { styled } from '@mui/system';
import { Button, Input, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
	ImageSide,
	Wrapper,
	WrapperLogin,
	Container,
	Header,
	NavigateButton,
} from '../Component/LoginComp';
import { Label, LibraryAddOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { InputForm } from '../Component/LoginComp';
import { GlobalButton, GlobalLink } from '../Theme/GlobalTheme';
import {
	primary,
	secondary,
	tertiary,
	textPrimary,
	textSecondary,
} from '../Theme/GlobalTheme';
import { useEffect, useState } from 'react';
import { libAPI } from '../Config/api';
import { LoginLoading } from './Login';
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
		textDecoration: 'none',
	},
});

export default function SignUp() {
	const { SetAndGetToken } = useAuth();

	const classes = useStyles();

	const [forms, setForms] = useState({
		emailorphonenumber: '',
		password: '',
		username: '',
	});

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleSignup = async e => {
		e.preventDefault();
		setIsLoading(true);
		isError && setIsError(false);
		try {
			const SignupRes = await libAPI.post('/user/signup', {
				...forms,
			});
			setIsLoading(false);
			console.log(SignupRes.data);

			// Jika berhasil signup, maka post request untuk login
			const loginRes = await libAPI.post('/user/login', {
				emailorphonenumber: forms.emailorphonenumber,
				password: forms.password,
			});

			console.log(loginRes.data);

			// ambil token dan usernamenya
			const token = loginRes.data.Token;
			const id = loginRes.data.id;

			SetAndGetToken(token, id);
			navigate('/');
		} catch (error) {
			setTimeout(() => {
				setTimeout(() => {
					setIsError(true);
					setIsLoading(false);
					setTimeout(() => {
						setIsError(false);
					}, 3000);
				}, 1500);
			});
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
					<form onSubmit={handleSignup} id='signup' autoComplete='off'>
						<Header sx={{ marginBottom: '47px' }}>
							<Typography
								className={classes.header}
								color='textPrimary'
								variant='h2'
							>
								Daftar
							</Typography>
						</Header>
						<Typography gutterBottom variant='h4'>
							Username
						</Typography>
						<InputForm
							variant='outlined'
							fullWidth
							placeholder='Masukkan username'
							color='primary'
							required
							onChange={e => {
								setForms(() => ({
									...forms,
									username: e.target.value,
								}));
							}}
						/>
						<Typography gutterBottom variant='h4'>
							Email/No.Hp
						</Typography>
						<InputForm
							variant='outlined'
							fullWidth
							type='email'
							required
							placeholder='Masukkan e-mail atau no.Hp'
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
							type='password'
							required
							variant='outlined'
							fullWidth
							placeholder='Masukkan password'
							onChange={e => {
								setForms(() => ({
									...forms,
									password: e.target.value,
								}));
							}}
						/>
						{isLoading && <LoginLoading />}
						{isError && <SingupError />}
						<NavigateButton>
							<Typography variant='body1'>
								Sudah punya akun?{' '}
								<GlobalLink sx={{ color: secondary }} to='/login'>
									Masuk
								</GlobalLink>
							</Typography>
							<GlobalButton
								type='submit'
								form='signup'
								variant='contained'
								color='tertiary'
							>
								Daftar
							</GlobalButton>
						</NavigateButton>
					</form>
				</WrapperLogin>
			</Wrapper>
		</Container>
	);
}

const SingupError = () => {
	return (
		<Typography marginBottom='15px' textAlign='center' color='error'>
			Password length must be between 8-16 !
		</Typography>
	);
};
