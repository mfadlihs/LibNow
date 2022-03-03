import { AppBar, Box, Toolbar, Typography, Zoom } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { QuerySearch } from './PencarianBukuComp';
import icon from '../Assets/Images/icon.png';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useRef, useState } from 'react';
import { primary, secondary, tertiary } from '../Theme/GlobalTheme';

const useStyles = makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
	nav: {
		padding: '8px 0',
	},
	content: {
		paddingRight: 70,
		paddingLeft: 70,
		display: 'flex',
		justifyContent: 'space-between',
	},
	imageBook: {
		aspectRatio: '3 / 4',
		backgroundColor: secondaryColor,
		backgroundImage: `url(${icon})`,
		backgroundRepeat: 'no-repeat',
		width: '248px',
		backgroundPosition: 'center',
	},
	pinjam: {
		width: 374,
		backgroundColor: secondaryColor,
	},
	details: {
		width: 567,
	},
	heading: {
		display: 'flex',
		justifyContent: 'end',
		marginBottom: 34,
	},
	rating: {
		// float: 'right',
	},
	judul: {
		flexGrow: 1,
	},
	navSection: {
		display: 'flex',
		backgroundColor: secondaryColor,
		marginBottom: 20,
	},
	bodySection: {
		minHeight: 160,
		padding: '10px 25px',
		backgroundColor: secondaryColor,
	},
}));

const NavButton = styled(Box)(props => ({
	flexBasis: '50%',
	padding: '16px',
	textAlign: 'center',
	userSelect: 'none',
	color: !props.active && primaryColor,
	position: 'relative',
	'&:hover': !props.active && {
		backgroundColor: `${primaryColor}40`,
		transition: 'ease-in-out .5s',
		cursor: 'pointer',
	},
	'&::before': {
		content: '""',
		right: 0,
		position: 'absolute',
		backgroundColor: '#000',
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
				backgroundColor: '#000',
				height: '3px',
		  }
		: {},
}));

const classes = props => {
	return useStyles(props);
};

export function DetailBukuNav() {
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
					<Typography variant='h1'>Detail Buku</Typography>
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

export function Content({ children }) {
	return <Box className={classes().content}>{children}</Box>;
}

export function ImageBook() {
	return <Box className={classes().imageBook} />;
}

export function Details({ children }) {
	return <Box className={classes().details}>{children}</Box>;
}

// =========== Untuk heading nya ==========
export function Heading({ children }) {
	return <Box className={classes().heading}>{children}</Box>;
}

export function Judul(props) {
	return (
		<Box className={classes().judul}>
			<Typography variant='h1' gutterBottom>
				Judul Buku
			</Typography>
			<Typography variant='h3'>Penulis</Typography>
		</Box>
	);
}

export function Rating(props) {
	return (
		<Box className={classes().rating}>
			{[1, 2, 3, 4, 5].map((i, index) => (
				<StarBorderOutlinedIcon fontSize='large' key={index} />
			))}
		</Box>
	);
}

// ============ Untuk section di bagian detail ===
export function Section() {
	const [sinopsis, setSinopsis] = useState(false);

	return (
		<Box>
			<NavSection sinopsis={sinopsis} setSinopsis={setSinopsis} />
			<BodySection sinopsis={sinopsis} setSinopsis={setSinopsis} />
		</Box>
	);
}

function NavSection(props) {
	const { sinopsis, setSinopsis } = props;

	return (
		<Box className={classes().navSection}>
			<NavButton
				onClick={() => {
					if (sinopsis) {
						return;
					}
					setSinopsis(!sinopsis);
				}}
				active={sinopsis}
			>
				DETAIL BUKU
			</NavButton>
			<NavButton
				onClick={() => {
					if (!sinopsis) {
						return;
					}
					setSinopsis(!sinopsis);
				}}
				active={!sinopsis}
			>
				SINOPSIS
			</NavButton>
		</Box>
	);
}

function BodySection(props) {
	const { sinopsis, setSinopsis } = props;
	return (
		<>
			{sinopsis ? (
				<DetailSection sinopsis={sinopsis} />
			) : (
				<SinopsisSection sinopsis={sinopsis} />
			)}
		</>
	);
}

function DetailSection({ sinopsis }) {
	return (
		<Zoom in={true}>
			<Box className={classes().bodySection}>
				<Typography variant='h3' gutterBottom>
					ISBN :
				</Typography>
				<Typography variant='h3' gutterBottom>
					Kategori :
				</Typography>
				<Typography variant='h3' gutterBottom>
					Jumlah Stok :
				</Typography>
			</Box>
		</Zoom>
	);
}

function SinopsisSection({ sinopsis }) {
	return (
		<Zoom in={true}>
			<Box className={classes().bodySection}>
				<Typography variant='h3' gutterBottom>
					Sinopsis :
				</Typography>
			</Box>
		</Zoom>
	);
}

// ============== Opsi untuk pinjam ============
export function Pinjam() {
	return <Box className={classes().pinjam}>INi untuk minjem bukunya</Box>;
}
