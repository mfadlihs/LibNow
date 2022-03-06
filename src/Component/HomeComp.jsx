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
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import { Link } from 'react-router-dom';
import cardImage from '../Assets/Images/cardImage.jpg';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

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
		position: 'relative',
		padding: '63px 77px',
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
						<GlobalLink to='/'>
							<img height='40px' src={icon} />
						</GlobalLink>
					</NavSide>

					<Box>
						<GlobalLink to='/search'>
							<GlobalButton color='tertiary' variant='contained'>
								rak buku
							</GlobalButton>
						</GlobalLink>
						<GlobalLink to='/daftar-perpustakaan'>
							<GlobalButton
								sx={{ marginLeft: '60px' }}
								color='tertiary'
								variant='contained'
							>
								perpustakaan
							</GlobalButton>
						</GlobalLink>
						<GlobalLink to='login'>
							<GlobalButton
								sx={{ marginLeft: '60px' }}
								color='secondary'
								variant='contained'
							>
								MASUK
							</GlobalButton>
						</GlobalLink>
					</Box>
				</NavInside>
			</AppBar>
			<div className={`${classes.toolbar} ${classes.toolbar2}`}></div>
		</>
	);
}

// Jumbotron ==============================

export function Jumbotron() {
	return <Box className={classes().jumbotron}></Box>;
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

export function CardBook() {
	return (
		<Box
			sx={{
				padding: '20px 23px',
				borderRadius: '8px',
				boxShadow: '0px 0px 10px 0px #00000040',
			}}
		>
			<Card sx={{ boxShadow: '0' }}>
				<CardMedia
					sx={{ marginBottom: '15px' }}
					image={cardImage}
					component='img'
					height='493'
				/>
				<Box>
					<Typography variant='h3' gutterBottom>
						Kitab Kawin
					</Typography>
					<Typography
						sx={{ marginBottom: '8px' }}
						color='textSecondary'
						variant='h4'
					>
						Laksmi Pammuntjak
					</Typography>
					<Box sx={{ marginBottom: '8px' }}>
						{[1, 1, 1, 1, 1].map((i, index) => (
							<StarIcon color='tertiary' fontSize='small' key={index} />
						))}
					</Box>
					<Typography variant='body2'>Perpustakaan Kota Malang, 2+</Typography>
				</Box>
			</Card>
		</Box>
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

// ================ footer ==================

export const Footer = styled(Grid)({
	backgroundColor: primary,
	padding: '81px 124px 56px',
});

export function FooterForm({ children }) {
	return (
		<Grid item lg={3.5}>
			<form autoComplete='off'>
				<Typography sx={{ marginBottom: '20px' }} variant='h4'>
					Ada masukan untuk kami?
				</Typography>
				<InputForm placeholder='Nama' variant='outlined' fullWidth />
				<InputForm placeholder='E-mail' variant='outlined' fullWidth />
				<InputForm
					placeholder='Feedback'
					variant='outlined'
					fullWidth
					multiline
					rows={4}
				/>
				<GlobalButton
					sx={{ float: 'right' }}
					variant='contained'
					color='tertiary'
				>
					kirim
				</GlobalButton>
			</form>
		</Grid>
	);
}

export const InputForm = styled(TextField)({
	backgroundColor: 'white',
	borderRadius: '4px',
	outline: '0px',
	marginBottom: '17px',
	'& input': {
		padding: '12px 16px',
	},
	'& fieldset': {
		border: '1px solid #b3b3b3',
	},
});
export const ButtonForm = styled(Button)({
	float: 'right',
});

export function Contact() {
	return (
		<Grid item lg={2.83}>
			<Typography sx={{ marginBottom: '17px' }} variant='h4'>
				Hubungi Kami
			</Typography>
			<FacebookRoundedIcon sx={{ marginRight: '15px' }} fontSize='large' />
			<InstagramIcon sx={{ marginRight: '15px' }} fontSize='large' />
			<TwitterIcon fontSize='large' />
			<Box sx={{ marginTop: '20px' }}>
				<img src={icon} height='28px' />
			</Box>
		</Grid>
	);
}

const ListFooter = styled(Typography)({
	marginBottom: '17px',
});

export function Peminjaman() {
	return (
		<Grid item lg={2.83}>
			<Typography sx={{ marginBottom: '18px' }} variant='h4'>
				Peminjaman
			</Typography>
			<ListFooter>Perpustakaan Penyedia</ListFooter>
			<ListFooter>Daftar Buku</ListFooter>
			<ListFooter>Peminjaman</ListFooter>
			<ListFooter>Pengembalian</ListFooter>
		</Grid>
	);
}

export function Lainnya() {
	return (
		<Grid item lg={2.83}>
			<Typography sx={{ marginBottom: '17px' }} variant='h4'>
				Lainnya
			</Typography>
			<ListFooter>Syarat & Kebijakan</ListFooter>
			<ListFooter>Kebijakan</ListFooter>
			<ListFooter>Bantuan</ListFooter>
		</Grid>
	);
}
