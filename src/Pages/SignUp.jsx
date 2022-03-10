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
import { Label } from '@mui/icons-material';
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
import { useEffect } from 'react';
import { libAPI } from '../Config/api';

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
	const classes = useStyles();

	return (
		<Container className='container'>
			<ImageSide />
			<Wrapper>
				<WrapperLogin>
					<form autoComplete='off'>
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
						/>
						<Typography gutterBottom variant='h4'>
							Email/No.Hp
						</Typography>
						<InputForm
							type='email'
							variant='outlined'
							fullWidth
							placeholder='Masukkan e-mail atau no.Hp'
						/>
						<Typography gutterBottom variant='h4'>
							Password
						</Typography>
						<InputForm
							type='password'
							variant='outlined'
							fullWidth
							placeholder='Masukkan password'
						/>
						<NavigateButton>
							<Typography variant='body1'>
								Sudah punya akun?{' '}
								<GlobalLink sx={{ color: secondary }} to='/login'>
									Masuk
								</GlobalLink>
							</Typography>
							<GlobalButton variant='contained' color='tertiary'>
								Daftar
							</GlobalButton>
						</NavigateButton>
					</form>
				</WrapperLogin>
			</Wrapper>
		</Container>
	);
}
