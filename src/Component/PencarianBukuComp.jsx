import SearchIcon from '@mui/icons-material/Search';
import {
	AppBar,
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	InputBase,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { CardBook } from './HomeComp';
import {
	GlobalButton,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import icon from '../Assets/Images/icon.png';
import { Link } from 'react-router-dom';
import cardImage from '../Assets/Images/cardImage.jpg';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { styled } from '@mui/system';

const useStyles = makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
	nav: {
		padding: '8px 0',
	},
	SearchInput: {
		display: 'flex',
		alignItems: 'center',
		border: `2px solid ${theme.palette.tertiary.main}`,
		padding: '2px 16px',
		borderRadius: '4px',
		width: '624px',
	},
	content: {
		padding: '0px 70px 70px',
	},
	section: {
		marginTop: '45px',
	},
}));

const classes = () => {
	return useStyles();
};

export function SearchNav() {
	const handleQuerySearch = e => {
		e.preventDefault();
	};

	return (
		<>
			<AppBar className={classes().nav} position='fixed'>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						['@media(min-width : 1200px)']: {
							paddingRight: '60px',
							paddingLeft: '60px',
						},
					}}
				>
					<Link to='/'>
						<img height='40px' src={icon} />
					</Link>
					<form onSubmit={handleQuerySearch} autoComplete='off'>
						<QuerySearch />
					</form>
					<GlobalButton variant='contained' color='tertiary'>
						rak buku
					</GlobalButton>
					<GlobalButton variant='contained' color='tertiary'>
						Perpustakaan
					</GlobalButton>
					<GlobalButton variant='contained' color='secondary'>
						Masuk
					</GlobalButton>
				</Toolbar>
			</AppBar>
			<Box
				sx={{
					marginBottom: '52px',
				}}
				className={classes().toolbar}
			/>
		</>
	);
}

export function QuerySearch() {
	return (
		<Box className={classes().SearchInput}>
			<InputBase fullWidth placeholder='Search' />
			<SearchIcon color='gray' sx={{ marginLeft: '10px' }} fontSize='small' />
		</Box>
	);
}

export function Content({ children }) {
	return <Box className={classes().content}>{children}</Box>;
}

const Heading = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
});

// ============= Popular =====================

export function Popular() {
	return (
		<Box className={classes().section}>
			<Heading>
				<Typography sx={{ marginBottom: '31px' }} variant='h3'>
					Paling banyak dipinjam
				</Typography>
				<Typography variant='h4'>Lihat Semua</Typography>
			</Heading>
			<Cards />
		</Box>
	);
}

// ================= Rating Tinggi ===============

export function RatingTinggi() {
	return (
		<Box className={classes().section}>
			<Heading>
				<Typography sx={{ marginBottom: '31px' }} variant='h3'>
					Rating Tinggi
				</Typography>
				<Typography variant='h4'>Lihat Semua</Typography>
			</Heading>
			<Cards />
		</Box>
	);
}

// ============== Rekomendasi =====================

export function Rekomendasi() {
	return (
		<Box className={classes().section}>
			<Heading>
				<Typography sx={{ marginBottom: '31px' }} variant='h3'>
					Kami Merekomendasikan Untukmu
				</Typography>
				<Typography variant='h4'>Lihat Semua</Typography>
			</Heading>
			<Cards />
		</Box>
	);
}

// ==================== CardBook =====================
// card yg isinya buku

function CardBook() {
	return (
		<Card
			sx={{ borderRadius: '20px', boxShadow: '0px 0px 10px 0px #00000040' }}
		>
			<CardMedia component='img' src={cardImage} height='390px' />
			<CardContent>
				<Typography variant='h3' gutterBottom>
					Kitab Kawin
				</Typography>
				<Typography gutterBottom color='textSecondary'>
					Laksmi Pamuntjak
				</Typography>
				<Box>
					{[1, 1, 1, 1, 0.5].map((i, index) => {
						if (i === 1) {
							return <StarIcon color='tertiary' />;
						} else if (i === 0.5) {
							return <StarHalfIcon color='tertiary' />;
						}
					})}
				</Box>
				<Typography color='textSecondary' variant='body2'>
					Tersedia di Perpustakaan Malang, 6+
				</Typography>
			</CardContent>
		</Card>
	);
}

function Cards() {
	return (
		<Grid container spacing='44px'>
			{[1, 2, 3, 4].map((i, index) => {
				return (
					<Grid key={index} item lg={3}>
						<CardBook sx={{ padding: '0' }} />
					</Grid>
				);
			})}
		</Grid>
	);
}
