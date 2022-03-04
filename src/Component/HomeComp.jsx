import {
	AppBar,
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Paper,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import icon from '../Assets/Images/icon.png';
import StarIcon from '@mui/icons-material/Star';
import { Children } from 'react';
import {
	GlobalButton,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: 'blue',
		['@media(min-width : 601px)']: {
			paddingRight: 50,
			paddingLeft: 50,
		},
		height: 300,
	},
	toolbar: theme.mixins.toolbar,
	toolbar2: {
		marginBottom: '40px',
	},
	nav: {
		padding: '8px 0',
	},
	button: {
		textTransform: 'none',
	},
	jumbotron: {
		marginBottom: '37px',
		height: '274px',
		backgroundColor: secondary,
		backgroundImage: `url(${icon})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
}));

const classes = () => {
	return useStyles();
};

// ============================================
// =================== Nav ====================
// ============================================

const NavInside = styled(Toolbar)({
	['@media(min-width : 601px)']: {
		paddingRight: 60,
		paddingLeft: 60,
	},
});

const ButtonNav = styled(Button)({
	textTransform: 'none',
	marginLeft: '88px',
});

const NavSide = styled(Box)({
	flexGrow: 1,
});

export function Nav() {
	const classes = useStyles();

	return (
		<>
			<AppBar className={classes.nav} color='primary' position='fixed'>
				<NavInside>
					<NavSide>
						<Link to='/'>
							<img height='40px' src={icon} />
						</Link>
					</NavSide>

					<Box>
						<GlobalButton color='tertiary' variant='contained'>
							rak buku
						</GlobalButton>
						<GlobalButton
							sx={{ marginLeft: '60px' }}
							color='tertiary'
							variant='contained'
						>
							perpustakaan
						</GlobalButton>
						<GlobalButton
							sx={{ marginLeft: '60px' }}
							color='secondary'
							variant='contained'
						>
							MASUK
						</GlobalButton>
					</Box>
				</NavInside>
			</AppBar>
			<div className={`${classes.toolbar} ${classes.toolbar2}`}></div>
		</>
	);
}

export function Jumbotron() {
	return <Box></Box>;
}

// =========================================
// ============ Container ==================
// =========================================

export const Container = styled('div')({
	padding: '0px 69px 66px',
});

// ====================================
// Card ===============================
// ====================================

const Cards = styled(Card)({
	border: '2px solid #1A1A1A',
	borderRadius: '8px',
});

const CardImage = styled(CardMedia)({
	// backgroundColor: secondary,
	backgroundImage: `url(https://drive.google.com/file/d/1pKMqAHI5RC1dKoffCxjGfEKAaSyoZl1O/view?usp=sharing)`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cober',
	// backgroundPosition: 'center',
	height: '400px',
});

export function CardBook() {
	return (
		<Card
			variant='outlined'
			sx={{ border: '2px solid #1a1a1a', borderRadius: '8px' }}
		>
			<CardImage component='div' />
			<CardContent>
				<Typography variant='h1'>Judul</Typography>
				<Typography
					sx={{ marginBottom: '8px' }}
					color='textSecondary'
					variant='h2'
				>
					Penulis
				</Typography>
				<Box sx={{ marginBottom: '8px' }}>
					{[1, 1, 1, 1, 1].map((i, index) => (
						<StarIcon fontSize='small' key={index} />
					))}
				</Box>
				<Typography color='textSecondary'>
					Tersedia di Perpustakaan Malang, 6+
				</Typography>
			</CardContent>
		</Card>
	);
}

// =========================================
// ============ Content ====================
// =========================================

export function Content() {
	return (
		<Grid container rowSpacing='48px' columnSpacing='85px'>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => {
				return (
					<Grid lg={4} item key={index}>
						<CardBook />
					</Grid>
				);
			})}
		</Grid>
	);
}

export const Footer = styled(Grid)({
	backgroundColor: primary,
	padding: '81px 124px 56px',
});

export function FooterForm({ children }) {
	return (
		<Grid item lg={3.5}>
			<form autoComplete='off'>
				<Typography sx={{ marginBottom: '26px' }} variant='h1'>
					Ada masukan untuk kami?
				</Typography>
				{/* {children} */}
				<InputForm
					placeholder='Nama'
					// color='black'
					variant='outlined'
					fullWidth
					label='Nama'
				/>
				<InputForm
					placeholder='E-mail'
					// color='black'
					variant='outlined'
					fullWidth
					label='E-mail'
				/>
				<InputForm
					placeholder='Feedback'
					// color='black'
					variant='outlined'
					fullWidth
					label='Feedback'
					multiline
					rows={4}
				/>
				<ButtonForm
					sx={{ padding: '10px 16px' }}
					variant='contained'
					// color='black'
				>
					KIRIM
				</ButtonForm>
			</form>
		</Grid>
	);
}

export const InputForm = styled(TextField)({
	backgroundColor: 'white',
	borderRadius: '4px',
	outline: '0px',
	marginBottom: '17px',
});
export const ButtonForm = styled(Button)({
	float: 'right',
});

export function Contact() {
	return (
		<Grid item lg={2.83}>
			<Typography sx={{ marginBottom: '17px' }} variant='h1'>
				Hubungi Kami
			</Typography>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Instagram
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Facebook
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Twitter
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Website
			</Link>
		</Grid>
	);
}

export function Peminjaman() {
	return (
		<Grid item lg={2.83}>
			<Typography sx={{ marginBottom: '17px' }} variant='h1'>
				Peminjaman
			</Typography>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Perpustakaan Penyedia
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Daftar Buku
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Peminjaman
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Pengembalian
			</Link>
		</Grid>
	);
}

export function Lainnya() {
	return (
		<Grid item lg={2.83}>
			<Typography sx={{ marginBottom: '17px' }} variant='h1'>
				Lainnya
			</Typography>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Syarat dan Ketentuan
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Kebijakan & Privasi
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Bantuan
			</Link>
			<Link
				sx={{ display: 'block' }}
				to='/'
				variant='h3'
				color='textPrimary'
				underline='none'
			>
				Hubungi Kami
			</Link>
		</Grid>
	);
}
