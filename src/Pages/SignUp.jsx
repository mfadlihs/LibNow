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
import { ButtonForm, InputForm } from '../Component/SignUpComp';

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
								Daftar LibNow Sekarang!
							</Typography>
						</Header>
						<Typography gutterBottom variant='h4'>
							Username
						</Typography>
						<InputForm
							type='email'
							variant='outlined'
							fullWidth
							placeholder='Masukkan username'
							color='primary'
						/>
						<Typography gutterBottom variant='h4'>
							Email/No.Hp
						</Typography>
						<InputForm
							type='password'
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
						<ButtonForm
							sx={{ width: '100%', padding: '16px 0' }}
							variant='contained'
							color='tertiary'
						>
							<Typography variant='h4'>DAFTAR</Typography>
						</ButtonForm>
					</form>
				</WrapperLogin>
			</Wrapper>
		</Container>
	);
}
