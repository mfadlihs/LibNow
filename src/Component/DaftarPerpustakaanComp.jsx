import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const useStyles = makeStyles(theme => ({
	cardLibrary: {
		border: `2px solid ${theme.palette.black.main}`,
		borderRadius: 8,
		padding: '16px',
		marginBottom: 31,
	},
}));

const classes = () => {
	return useStyles();
};

export function CardLibrary() {
	return (
		<Box className={classes().cardLibrary}>
			<CardLibraryMedia />
			<Typography variant='h1'>Nama Perpustakaan</Typography>
			<Typography
				sx={{ marginBottom: '16px' }}
				variant='h3'
				color='textSecondary'
			>
				Alamat Perpustakaan
			</Typography>
			<Button color='black' variant='contained'>
				KUNJUNGI PERPUSTAKAAN
			</Button>
		</Box>
	);
}

const CardLibraryMedia = styled('div')({
	height: 16,
	marginBottom: 8,
});

export const Content = styled('div')({
	padding: '0px 69px 69px',
});
