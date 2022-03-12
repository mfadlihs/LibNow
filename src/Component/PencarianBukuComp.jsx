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

import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import icon from '../Assets/Images/icon.png';
import { Link } from 'react-router-dom';
import cardImage from '../Assets/Images/cardImage.jpg';
import { styled } from '@mui/system';
import { CardBook } from '../Layout/CardBook';

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
		width: '500px',
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

const NavSide = styled(Box)(props => ({
	display: 'flex',
	justifyContent: 'space-between',
	marginLeft: '30px',
	flexGrow: 1,
}));

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
					<GlobalLink to='/'>
						<img height='40px' src={icon} />
					</GlobalLink>
					<NavSide display={['none', 'none', 'none', 'flex']}>
						<form onSubmit={handleQuerySearch} autoComplete='off'>
							<QuerySearch />
						</form>
						<GlobalLink to='/search'>
							<GlobalButton variant='contained' color='tertiary'>
								rak buku
							</GlobalButton>
						</GlobalLink>
						<GlobalLink to='/daftar-perpustakaan'>
							<GlobalButton variant='contained' color='tertiary'>
								Perpustakaan
							</GlobalButton>
						</GlobalLink>
						<GlobalLink to='/login'>
							<GlobalButton variant='contained' color='secondary'>
								Masuk
							</GlobalButton>
						</GlobalLink>
					</NavSide>
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

export const SearchInput = styled(Box)(props => ({
	display: 'flex',
	alignItems: 'center',
	border: `2px solid ${tertiary}`,
	padding: '2px 16px',
	borderRadius: '4px',
	width: '500px',
}));

export function QuerySearch() {
	return (
		<SearchInput>
			<InputBase fullWidth placeholder='Search' />
			<SearchIcon color='gray' sx={{ marginLeft: '10px' }} fontSize='small' />
		</SearchInput>
	);
}

export function Content({ children }) {
	return <Box className={classes().content}>{children}</Box>;
}

const Heading = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 30,
});

// ============= Popular =====================

export function Popular() {
	return (
		<Box className={classes().section}>
			<Heading>
				<Typography flexGrow={1} variant='h3'>
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
				<Typography variant='h3'>Rating Tinggi</Typography>
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
				<Typography variant='h3'>Kami Merekomendasikan Untukmu</Typography>
				<Typography variant='h4'>Lihat Semua</Typography>
			</Heading>
			<Cards />
		</Box>
	);
}

function Cards() {
	return (
		<Grid container spacing='44px'>
			{[1, 2, 3, 4].map((i, index) => {
				return (
					<Grid key={index} item lg={3} md={4} sm={6} xs={12}>
						<CardBook />
					</Grid>
				);
			})}
		</Grid>
	);
}
