import {
	AppBar,
	autocompleteClasses,
	Box,
	Toolbar,
	Typography,
	Zoom,
	FormControl,
	RadioGroup,
	FormLabel,
	Radio,
	FormControlLabel,
	Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { QuerySearch } from './PencarianBukuComp';
import icon from '../Assets/Images/icon.png';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useEffect, useRef, useState } from 'react';
import {
	GlobalButton,
	primary,
	secondary,
	tertiary,
	textPrimary,
	textSecondary,
} from '../Theme/GlobalTheme';
import bookImage from '../Assets/Images/goodHabits.jpg';
import StarIcon from '@mui/icons-material/Star';
import { useAuth } from '../Config/Auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { ModalLogin } from '../Templates/Modal';

const useStyles = makeStyles(theme => ({
	// toolbar: theme.mixins.toolbar,
	nav: {
		padding: '8px 0',
	},
	content: {
		paddingRight: 40,
		paddingLeft: 40,
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		paddingBottom: 40,
	},
	pinjam: {
		width: 'auto',
		display: 'flex',
		flexDirection: 'column',
		minHeight: 328,
		position: 'relative',
		padding: '30px',
		backgroundColor: '#f2f2f2',
		boxShadow: '0px 0px 10px 0px #00000040',
	},
	details: {
		// width: 607,
	},
	judul: {
		flexGrow: 1,
	},
	navSection: {
		display: 'flex',
		backgroundColor: theme.palette.complementary1.main,
		marginBottom: 20,
	},
	bodySection: {
		paddingTop: 20,
	},
}));

const classes = props => {
	return useStyles(props);
};

export function Content({ children }) {
	return (
		<Box paddingTop='50px'>
			<Grid container columnSpacing='50px' className={classes().content}>
				{children}
			</Grid>
		</Box>
	);
}

export const ImageBookContainer = styled(Grid)(theme => ({
	padding: '10px 20px',
	backgroundColor: primary,
	borderRadius: '20px',
}));

export const ImageBook = styled(Box)({
	aspectRatio: '3/4',
	backgroundImage: `url(${bookImage})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '329px',
});

export function Details({ children }) {
	return (
		<Grid item lg={6} md={8} xs={12}>
			<Box marginTop={['30px', '30px', '0', '0']} className={classes().details}>
				{children}
			</Box>
		</Grid>
	);
}

// =========== Untuk heading nya ==========
export const Heading = styled(Box)({
	display: 'flex',
	justifyContent: 'end',
	marginBottom: 12,
});

export function Judul(props) {
	return (
		<Box className={classes().judul}>
			<Typography variant='h3' gutterBottom>
				Good Habits, Bad Habits
			</Typography>
			<Typography color='textSecondary'>Wendy Wood</Typography>
		</Box>
	);
}
export function Rating(props) {
	return (
		<Box sx={{ position: 'relative', top: '5px' }} className={classes().rating}>
			{[1, 2, 3, 4, 5].map((i, index) => (
				<StarIcon color='tertiary' key={index} />
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

const NavButton = styled(Box)(props => ({
	flexBasis: '50%',
	padding: '16px',
	textAlign: 'center',
	userSelect: 'none',
	color: !props.active && textSecondary,
	position: 'relative',
	'&:hover': !props.active && {
		backgroundColor: `${primary}98`,
		transition: 'ease-in-out .5s',
		cursor: 'pointer',
		color: `${textPrimary}97`,
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
			<Box sx={{ display: 'flex' }} className={classes().bodySection}>
				<Box sx={{ flexBasis: '50%' }}>
					<Typography variant='body2' gutterBottom color='textSecondary'>
						ISBN
					</Typography>
					<Typography sx={{ marginBottom: '20px' }} gutterBottom>
						978-602-06-3839-3
					</Typography>
					<Typography color='textSecondary' gutterBottom variant='body2'>
						Jumlah Stok
					</Typography>
					<Typography>5 Buah</Typography>
				</Box>
				<Box sx={{ flexBasis: '50%' }}>
					<Typography variant='body2' color='textSecondary' gutterBottom>
						Jumlah Stok
					</Typography>
					<Typography sx={{ marginBottom: '20px' }}>
						Gramedia Pustaka Utama
					</Typography>
					<Typography variant='body2' color='textSecondary' gutterBottom>
						Bahasa
					</Typography>
					<Typography sx={{ marginBottom: '20px' }}>Indonesia</Typography>
				</Box>
			</Box>
		</Zoom>
	);
}

function SinopsisSection({ sinopsis }) {
	return (
		<Zoom in={true}>
			<Box className={classes().bodySection}>
				<Typography variant='body2' align='justify'>
					Kita menghabiskan 43% hari kita melakukan tindakan tanpamemikirkannya.
					Cara kita merespons orang dan membawa diri dalam rapat, apa yang kita
					beli, serta kapan dan bagaimana kita berolahraga, makan,dan
					minum—semua itu kita laku-kan tanpa sadar sebagai hasil darikebiasaan.
					Namun, ketika ingin mengubah diri, kita berharap diri sadarkita,
					keteguhan dan niat kita, cukup untuk menghasilkan perubahan
					yangpositif. Itulah sebabnya, kita hampir selalu gagal.
				</Typography>
				<Typography variant='body2' align='justify'>
					Lalu bagaimana kalau kita bisa mengasah kekuatan luar biasa pikiran
					bawah sadar, yang sudah menentukan begitu banyak tindakan kita, agar
					kita benar-benar men-capai sasaran yang kita tetapkan?
				</Typography>
				<Typography variant='body2' align='justify'>
					Berdasarkan penelitian selama tiga dekade, Wendy Wood menunjukkan—dari
					segi ilmiah yang menarik—bagaimana kita membentuk kebiasaan dan
					menawarkan cara memanfaatkan kebiasaan itu untuk melakukan perubahan.
					Good Habits, Bad Habits yang merupakan perpaduan dari ilmu saraf,
					studi kasus, dan percobaan di laboratoriumnya adalah buku yang
					menyeluruh, mudah dipahami, dan sangat praktis, yang akan mengubah
					cara pikir Anda tentang hampir segala aspek kehidupan. Kekuatan tekad
					saja tidaklah cukup bila Anda ingin mencapai kehidupan yang Anda
					impikan. Buku ini menawarkan harapan nyata bagi Anda yang ingin
					melakukan perubahan positif.
				</Typography>
			</Box>
		</Zoom>
	);
}

// ============== Opsi untuk pinjam ============
export function Pinjam() {
	const [value, setValue] = useState('');
	const { token } = useAuth();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	const handlePinjam = () => {
		if (token) {
			navigate('/req-confirm');
		} else {
			handleOpen();
		}
	};

	const radioHandler = e => {
		setValue(e.target.value);
	};

	useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<Grid item lg={3} xs={12}>
			<Box
				marginTop={['30px', '30px', '30px', '']}
				className={classes().pinjam}
			>
				<ContentPinjam>
					<Typography
						sx={{ marginBottom: '16px' }}
						variant='h4'
						color='textSecondary'
					>
						Mau pinjam?
					</Typography>
					<FormControl>
						<Typography gutterBottom>Pilih perpustakaan: </Typography>
						<RadioGroup
							color='complementary2'
							aria-labelledby='demo-radio-buttons-group-label'
							name='radio-buttons-group'
							onChange={radioHandler}
						>
							<FormControlLabel
								value='Perpustakaan Kota Malang'
								control={<Radio color='complementary2' />}
								label='Perpustakaan Kota Malang'
							/>
							<FormControlLabel
								value='Perpustakaan Asri'
								control={<Radio color='complementary2' />}
								label='Perpustakaan Asri'
							/>
							<FormControlLabel
								value='Perpustakaan Cherry'
								control={<Radio color='complementary2' />}
								label='Perpustakaan Cherry'
							/>
						</RadioGroup>
					</FormControl>
				</ContentPinjam>
				<PinjamButton
					onClick={handlePinjam}
					variant='contained'
					color='tertiary'
				>
					pinjam
				</PinjamButton>
			</Box>
			<ModalLogin
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
			/>
		</Grid>
	);
}

const PinjamButton = styled(GlobalButton)({
	width: '100%',
});

const ContentPinjam = styled(Box)({
	flexGrow: 1,
});
