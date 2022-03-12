import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { libAPI } from '../../Config/api';
import { useAuth } from '../../Config/Auth';
import { GlobalButton } from '../../Theme/GlobalTheme';

export function SignUp({ setisLogin }) {
	const { SetAndGetToken } = useAuth();
	const [forms, setForms] = useState({
		emailorphonenumber: '',
		password: '',
		username: '',
	});
	const navigate = useNavigate();

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
		<>
			<Heading>
				<Typography variant='h3'>Daftar</Typography>
				<Typography
					onClick={() => {
						setisLogin(true);
					}}
					sx={{ cursor: 'pointer' }}
					color='secondary'
				>
					Masuk
				</Typography>
			</Heading>
			<form onSubmit={handleSignup} id='login' autoComplete='off'>
				<LabelInput>Username</LabelInput>
				<InputForm
					variant='outlined'
					fullWidth
					placeholder='Masukkan username'
					required
					onChange={e => {
						setForms(() => ({
							...forms,
							username: e.target.value,
						}));
					}}
				/>
				<LabelInput>Email/No. Hp</LabelInput>
				<InputForm
					placeholder='Masukkan e-mail atau no.hp'
					variant='outlined'
					fullWidth
					required
					type='email'
					onChange={e => {
						setForms(() => ({
							...forms,
							emailorphonenumber: e.target.value,
						}));
					}}
				/>
				<LabelInput>Password</LabelInput>
				<InputForm
					placeholder='Masukkan password'
					fullWidth
					variant='outlined'
					type='password'
					required
					onChange={e => {
						setForms(() => ({
							...forms,
							password: e.target.value,
						}));
					}}
				/>
				{isError && <LoginError />}
				{isLoading && <LoginLoading />}
				<ButtonForm
					type='submit'
					form='login'
					variant='contained'
					color='tertiary'
				>
					MASUK
				</ButtonForm>
			</form>
		</>
	);
}

const Heading = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 30,
});

const InputForm = styled(TextField)({
	marginBottom: 37,
});

const LabelInput = styled(Typography)({
	marginBottom: 7,
});

const ButtonForm = styled(GlobalButton)({
	width: '100%',
});
