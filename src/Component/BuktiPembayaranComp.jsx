import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from '@mui/styles';
import bookImage from '../Assets/Images/goodHabits.jpg';

const useStyles = makeStyles(theme => ({
	heading: {
		padding: '20px 0',
		display: 'flex',
		alignItems: 'center',
		borderBottom: `1px solid ${theme.palette.complementary3.main}`,
	},
	content: {
		display: 'grid',
		gridTemplateColumns: 'auto 1fr',
		gap: '20px 12px',
	},
	bookDetails: {
		display: 'grid',
		gridTemplateColumns: 'auto 1fr',
		alignContent: 'flex-start',
		gap: '20px 9px',
	},
}));

const classes = () => {
	return useStyles();
};

export const Container = styled(Box)({
	padding: '0px 26px',
	width: 953,
	height: 575,
	borderRadius: 20,
	boxShadow: '0px 0px 10px 0px #00000040',
});

export function Heading() {
	return (
		<Box className={classes().heading}>
			<ArrowBackIcon sx={{ marginRight: '24px' }} />
			<Typography variant='h4'>Bukti Peminjaman</Typography>
		</Box>
	);
}

export const Wrapper = styled(Box)({
	padding: '20px 0',
});

const BookImage = styled('img')({
	width: 100,
	height: 150,
	objectFit: 'cover',
});

export function Content() {
	return (
		<Box className={classes().content}>
			<Typography variant='h4'>No Peminjaman:</Typography>
			<Typography variant='h4'>PD108091111</Typography>
			<Typography variant='h4'>Perpustakaan:</Typography>
			<Typography variant='h4'>Perpustakaan Kota Malang</Typography>
			<Typography variant='h4'>Nama Peminjam:</Typography>
			<Typography variant='h4'>Fadli Wong</Typography>
			<BookImage src={bookImage} />
			<BookDetails />
		</Box>
	);
}

export function BookDetails() {
	return (
		<Box className={classes().bookDetails}>
			<Typography>Judul:</Typography>
			<Typography>Good Habits, Bad Habits</Typography>
			<Typography>Penulis:</Typography>
			<Typography>Wendy Wood</Typography>
			<Typography>ISBN:</Typography>
			<Typography>63-100-09980</Typography>
		</Box>
	);
}

export function Reminder() {
	return (
		<Typography
			sx={{
				marginTop: '60px',
			}}
		>
			Wajib dikembalikan sebelum 18 Maren 2022 pukul 12.45 WIB
		</Typography>
	);
}
