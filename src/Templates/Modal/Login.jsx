import { Box, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { libAPI } from '../../Config/api';
import { useAuth } from '../../Config/Auth';
import { LoginError, LoginLoading } from '../../Pages/Login';
import { GlobalButton, GlobalLink } from '../../Theme/GlobalTheme';

export function Login({ setisLogin }) {
	const navigate = useNavigate();
	const { SetAndGetToken } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [forms, setForms] = useState({ emailorphonenumber: '', password: '' });

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
		<>
			<Heading>
				<Typography variant='h3'>Masuk</Typography>
				<Typography
					onClick={() => {
						setisLogin(false);
					}}
					sx={{ cursor: 'pointer' }}
					color='secondary'
				>
					Daftar
				</Typography>
			</Heading>
			<form onSubmit={handleLogin} id='login' autoComplete='off'>
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
