import { styled } from '@mui/system';
import { Button, Input, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
	ImageSide,
	Wrapper,
	WrapperLogin,
	Container,
	Header,
	InputForm,
	ButtonForm,
	NavigateButton,
} from '../Component/LoginComp';
import { Label } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
		marginBottom: '50px',
	},
});

export default function Login() {
	const classes = useStyles();

	return (
		<Container className='container'>
			<ImageSide />
			<Wrapper>
				<WrapperLogin>
					<form autoComplete='off'>
						<Header>
							<Typography className={classes.header} variant='h1' gutterBottom>
								Masuk ke Akun Anda
							</Typography>
						</Header>
						<Typography gutterBottom variant='h2'>
							E-mail/No HP
						</Typography>
						{/* <TextField variant='outlined' fullWidth placeholder='label' /> */}
						<InputForm
							type='email'
							variant='outlined'
							fullWidth
							placeholder='label'
						/>
						<br />
						<Typography gutterBottom variant='h2'>
							Password
						</Typography>
						<InputForm
							type='password'
							variant='outlined'
							fullWidth
							placeholder='label'
						/>
						<NavigateButton>
							<Typography variant='h2'>
								Belum Punya akun? <Link to='/signup'>Daftar</Link>
							</Typography>
							<ButtonForm variant='contained'>
								<Typography variant='h2'>Masuk</Typography>
							</ButtonForm>
						</NavigateButton>
					</form>
				</WrapperLogin>
			</Wrapper>
		</Container>
	);
}
