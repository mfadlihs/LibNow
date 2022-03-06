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
		gap: '12px 20px',
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
		</Box>
	);
}
