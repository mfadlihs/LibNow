import SearchIcon from '@mui/icons-material/Search';
import {
	AppBar,
	Box,
	Grid,
	InputBase,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CardBook } from './HomeComp';

import { primary, secondary, tertiary } from '../Theme/GlobalTheme';

const useStyles = makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
	nav: {
		padding: '8px 0',
	},
	SearchInput: {
		display: 'flex',
		alignItems: 'center',
		border: `1px solid ${theme.palette.secondary.main}`,
		padding: '5px 16px',
		borderRadius: '4px',
		width: '624px',
	},
	content: {
		paddingLeft: '70px',
		paddingRight: '70px',
	},
	section: {
		marginTop: '45px',
	},
}));

const classes = () => {
	return useStyles();
};

export function SearchNav() {
	return (
		<>
			<AppBar
				sx={{}}
				className={classes().nav}
				position='fixed'
				color='tersier'
			>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						['@media(min-width : 1200px)']: {
							paddingRight: '60px',
							paddingLeft: '60px',
						},
					}}
				>
					<Typography variant='h1'>Logo</Typography>
					<Typography variant='h1'>Rak Buku</Typography>
					<form autoComplete='off'>
						<QuerySearch />
					</form>
					<Typography variant='h1'>Perpustakaan</Typography>
					<Typography variant='h1'>Masuk</Typography>
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
			<SearchIcon color='gray' sx={{ marginRight: '16px' }} fontSize='small' />
			<InputBase fullWidth placeholder='Search' />
		</Box>
	);
}

export function Content({ children }) {
	return <Box className={classes().content}>{children}</Box>;
}

export function Popular() {
	return (
		<Box className={classes().section}>
			<Typography sx={{ marginBottom: '31px' }} variant='h1'>
				Paling banyak dipinjam
			</Typography>
			<Cards />
		</Box>
	);
}

function Cards() {
	return (
		<Grid container spacing='35px'>
			{[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => {
				return (
					<Grid key={index} item lg={3}>
						<CardBook />
					</Grid>
				);
			})}
		</Grid>
	);
}

export function RatingTinggi() {
	return (
		<Box className={classes().section}>
			<Typography sx={{ marginBottom: '31px' }} variant='h1'>
				Rating Tinggi
			</Typography>
			<Cards />
		</Box>
	);
}
export function Rekomendasi() {
	return (
		<Box className={classes().section}>
			<Typography sx={{ marginBottom: '31px' }} variant='h1'>
				Kami Merekomendasikan Untukmu
			</Typography>
			<Cards />
		</Box>
	);
}
