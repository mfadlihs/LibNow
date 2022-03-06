import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Box)({
	flexGrow: 1,
	height: '100%',
	backgroundColor: '#fff',
	padding: '30px',
});

export function Heading() {
	return (
		<>
			<Typography sx={{ marginBottom: '5px' }} variant='h3'>
				Profil Saya
			</Typography>
			<Typography variant='body2' color='textSecondary'>
				Kelola informasi profil Anda untuk mengontrol, melindungi dan
				mengamankan akun
			</Typography>
		</>
	);
}
