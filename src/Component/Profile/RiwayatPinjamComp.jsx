import { AccountCircle } from '@mui/icons-material';
import {
	Box,
	Grid,
	InputAdornment,
	TextField,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { useState } from 'react';
import {
	GlobalButton,
	primary,
	secondary,
	tertiary,
	textPrimary,
	textSecondary,
} from '../../Theme/GlobalTheme';
import SearchIcon from '@mui/icons-material/Search';
import bookImage from '../../Assets/Images/cardImage.jpg';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
	},
	card: {
		display: 'flex',
		marginBottom: 15,
		backgroundColor: '#fff',
		gap: 12,
	},
	cardContent: {
		flexGrow: 1,
	},
	cardSide: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
}));

const classes = () => {
	return useStyles();
};

export function Container() {
	const [nav, setNav] = useState('semua');

	return (
		<Box className={classes().container}>
			<Nav nav={nav} setNav={setNav} />
			<Search />
			<Wrapper nav={nav} setNav={setNav} />
		</Box>
	);
}

export function Nav(props) {
	const { nav, setNav } = props;

	const handleNav = section => {
		setNav(section);
	};

	return (
		<Box sx={{ marginBottom: '25px', backgroundColor: '#ffffff' }}>
			<Grid container>
				<Grid item md={3}>
					<NavButton
						onClick={() => {
							handleNav('semua');
						}}
						active={nav === 'semua' && true}
					>
						<Typography variant='button'>Semua</Typography>
					</NavButton>
				</Grid>
				<Grid item md={3}>
					<NavButton
						onClick={() => {
							handleNav('konfirmasi');
						}}
						active={nav === 'konfirmasi' && true}
					>
						<Typography variant='button'>konfirmasi</Typography>
					</NavButton>
				</Grid>
				<Grid item md={3}>
					<NavButton
						onClick={() => {
							handleNav('dipinjam');
						}}
						active={nav === 'dipinjam' && true}
					>
						<Typography variant='button'>dipinjam</Typography>
					</NavButton>
				</Grid>
				<Grid item md={3}>
					<NavButton
						onClick={() => {
							handleNav('selesai');
						}}
						active={nav === 'selesai' && true}
					>
						<Typography variant='button'>selesai</Typography>
					</NavButton>
				</Grid>
			</Grid>
		</Box>
	);
}

const NavButton = styled(Box)(props => ({
	display: 'flex',
	justifyContent: 'center',
	position: 'relative',
	alignItems: 'center',
	paddingTop: 16,
	color: props.active ? secondary : textSecondary,
	paddingBottom: 16,
	'&:hover': !props.active && {
		backgroundColor: `${primary}98`,
		transition: 'ease-in-out .5s',
		cursor: 'pointer',
		color: secondary,
	},
	'&::before': {
		content: '""',
		right: 0,
		position: 'absolute',
		backgroundColor: secondary,
		transform: 'translateX(-50%) scale(0)',
		transition: 'transform 0.5s ease-in-out',
		left: 0,
		bottom: 0,
		height: '3px',
	},
	'&:hover::before': !props.active
		? {
				transform: 'translateX(0%) scale(1)',
		  }
		: {},

	'&::after': props.active
		? {
				content: '""',
				position: 'absolute',
				right: 0,
				bottom: 0,
				left: 0,
				backgroundColor: secondary,
				height: '3px',
		  }
		: {},
}));

function Search() {
	return (
		<Box sx={{ backgroundColor: '#dcdcdc', marginBottom: '17px' }}>
			<form autoComplete='off'>
				<TextField
					id='input-with-icon-textfield'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<SearchIcon />
							</InputAdornment>
						),
					}}
					variant='outlined'
					fullWidth
					placeholder='Cari berdasarkan Judul Buku atau Nama Penulis dalam semua pesanan'
				/>
			</form>
		</Box>
	);
}

function Wrapper(props) {
	const { nav, setNav } = props;

	// nav === 'semua' && <SemuaSection />;
	// nav === 'konfirmasi' && <KonfimasiSection />;
	// nav === 'dipinjam' && <DipinjamSection />;
	// nav === 'selesai' && <SelesaiSection />;

	if (nav === 'semua') {
		return <SemuaSection />;
	}
	if (nav === 'konfirmasi') {
		return <KonfirmasiSection />;
	}
	if (nav === 'dipinjam') {
		return <DipinjamSection />;
	}
	if (nav === 'selesai') {
		return <SelesaiSection />;
	}

	return <Box>ini wrapper??</Box>;
}

function SemuaSection() {
	return (
		<Box>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</Box>
	);
}

function KonfirmasiSection() {
	return (
		<Box>
			<Card />
			<Card />
			<Card />
		</Box>
	);
}

function DipinjamSection() {
	return (
		<Box>
			<Card />
			<Card />
		</Box>
	);
}

function SelesaiSection() {
	return (
		<Box>
			<Card />
		</Box>
	);
}

// const BookCardContainer = styled(Box)({
// 	display: 'flex',
// 	padding: 20,
// 	backgroundColor: 'red',
// 	marginBottom: 15,
// });

function Card() {
	return (
		<Box className={classes().card}>
			<CardImage />
			<CardContentContainer>
				<CardContent />
				<CardSide />
			</CardContentContainer>
		</Box>
	);
}

const CardImage = styled(Box)({
	width: 119,
	height: 176,
	backgroundImage: `url(${bookImage})`,
	backgroundSize: 'cover',
});

const CardContentContainer = styled(Box)({
	display: 'flex',
	padding: '30px 30px 30px 0px',
	flexGrow: 1,
});

function CardContent() {
	return (
		<Box className={classes().cardContent}>
			<CardContentText variant='h3'>Selena</CardContentText>
			<CardContentText variant='h4' color='textSecondary'>
				Tere Liye
			</CardContentText>
			<CardContentText sx={{ marginBottom: 0 }} variant='body2'>
				Menununggu konfirmasi sampai pukul 13.30 WIB
			</CardContentText>
		</Box>
	);
}

const CardContentText = styled(Typography)({
	marginBottom: 20,
});

function CardSide() {
	return (
		<Box className={classes().cardSide}>
			<Typography variant='body2' color='secondary'>
				Menunggu Konfirmasi
			</Typography>
			<GlobalButton variant='contained' color='tertiary'>
				BATAL
			</GlobalButton>
		</Box>
	);
}
