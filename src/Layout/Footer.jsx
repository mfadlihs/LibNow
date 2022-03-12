import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import icon from '../Assets/Images/icon.png';

const useStyles = makeStyles({
	footer: {
		height: 'auto',
		backgroundColor: primary,
		padding: '81px 0 56px',
		['@media(max-width : 600px)']: {
			paddingTop: '40px',
			paddingBottom: '40px',
		},
	},
});

const InputForm = styled(TextField)({
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

function FooterForm() {
	return (
		<Grid item lg={3.5} md={12} marginBottom={['20px', '20px', '0']}>
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

function Contact() {
	return (
		<Grid item lg={2.83} sm={4} xs={6} textAlign={['center', 'center', 'left']}>
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

function Peminjaman() {
	return (
		<Grid
			item
			lg={2.83}
			sm={4}
			xs={12}
			marginBottom={['10px', '0px']}
			textAlign={['center', 'center', 'left']}
		>
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
		<Grid item lg={2.83} sm={4} xs={6} textAlign={['center', 'center', 'left']}>
			<Typography sx={{ marginBottom: '17px' }} variant='h4'>
				Lainnya
			</Typography>
			<ListFooter>Syarat & Kebijakan</ListFooter>
			<ListFooter>Kebijakan</ListFooter>
			<ListFooter>Bantuan</ListFooter>
		</Grid>
	);
}

export default function Footer() {
	const classes = useStyles();

	return (
		<Grid
			className={classes.footer}
			px={['30px', '40px']}
			container
			columnSpacing={4}
		>
			<FooterForm />
			<Peminjaman />
			<Contact />
			<Lainnya />
		</Grid>
	);
}
