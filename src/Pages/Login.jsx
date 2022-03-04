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
	NavigateButton,
} from '../Component/LoginComp';
import { Label } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { GlobalButton } from '../Theme/GlobalTheme';

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

export default function Login() {
	const classes = useStyles();

	return (
		<Container className='container'>
			<ImageSide />
			<Wrapper>
				<WrapperLogin>
					<form autoComplete='off'>
						<Header>
							<Typography
								className={classes.header}
								color='textPrimary'
								variant='h2'
							>
								Masuk ke LibNow
							</Typography>
						</Header>
						<Typography gutterBottom variant='h4'>
							E-mail/No HP
						</Typography>
						<InputForm
							type='email'
							variant='outlined'
							fullWidth
							placeholder='Masukkan e-mail atau No.HP'
							color='primary'
						/>
						<Typography gutterBottom variant='h4'>
							Password
						</Typography>
						<InputForm
							sx={{ marginBottom: '2px' }}
							type='password'
							variant='outlined'
							fullWidth
							placeholder='label'
						/>
						<Typography
							sx={{ marginBottom: '53px' }}
							variant='body2'
							align='right'
						>
							Lupa Password?
						</Typography>
						<NavigateButton>
							<Typography variant='body1'>
								Belum Punya akun?{' '}
								<Link className={classes.link} to='/signup'>
									Daftar
								</Link>
							</Typography>
							<GlobalButton color='tertiary' variant='contained'>
								<Typography variant='Button'>Ini masuk</Typography>
								{/* masuk */}
							</GlobalButton>
						</NavigateButton>
					</form>
				</WrapperLogin>
			</Wrapper>
		</Container>
	);
}
