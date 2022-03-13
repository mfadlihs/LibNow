import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import profileImage from '../../Assets/Images/profileImage.jpg';
import { GlobalButton } from '../../Theme/GlobalTheme';
import {
	AccoutDetailContainer,
	UbahButton,
} from '../../Templates/AccountDetail';
import { Link } from 'react-router-dom';

export const Container = styled(Box)({
	flexGrow: 1,
	height: '100%',
	backgroundColor: '#fff',
	padding: '30px',
});

export function Heading() {
	return (
		<Box marginBottom='40px'>
			<Typography sx={{ marginBottom: '5px' }} variant='h3'>
				Profil Saya
			</Typography>
			<Typography variant='body2' color='textSecondary'>
				Kelola informasi profil Anda untuk mengontrol, melindungi dan
				mengamankan akun
			</Typography>
		</Box>
	);
}

// export const Content = () => {
// 	return <Box>ini contentnya</Box>;
// };

export const Photos = () => {};

export const Body = styled(Grid)({
	padding: '0px 50px',
});

export const Content = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
});

export const Side = styled(Box)({});

export const AccountDetail = () => {
	return (
		<AccoutDetailContainer marginBottom='40px'>
			<Typography textAlign='right' color='textSecondary'>
				Username
			</Typography>
			<Typography color='textSecondary'>
				fadliwong <UbahButton to=''>Ubah</UbahButton>
			</Typography>
			<Typography textAlign='right' color='textSecondary'>
				E-mail
			</Typography>
			<Typography color='textSecondary'>
				fad******@gmail.com <UbahButton to=''>Ubah</UbahButton>
			</Typography>
			<Typography textAlign='right' color='textSecondary'>
				Nomor Telepon
			</Typography>
			<Typography color='textSecondary'>
				*************91 <UbahButton to=''>Ubah</UbahButton>
			</Typography>
		</AccoutDetailContainer>
	);
};



export function PhotoSide() {
	return (
		<Box px={['100px ']}>
			<ProfileImage />
			<Box width='max-content' margin='auto'>
				<ChangeProfileButton color='complementary2' variant='outlined'>
					Pilih Gambar
				</ChangeProfileButton>
			</Box>
			<Typography textAlign='center' variant='body2' color='textSecondary'>
				Ukuran gambar: maks. 1 MB
			</Typography>
			<Typography textAlign='center' variant='body2' color='textSecondary'>
				Format gambar: .JPEG, .PNG
			</Typography>
		</Box>
	);
}

const ChangeProfileButton = styled(GlobalButton)({
	margin: 'auto',
	marginBottom: '8px',
});

const ProfileImage = styled(Box)(props => ({
	width: 106,
	height: 106,
	backgroundImage: `url(${profileImage})`,
	margin: 'auto',
	backgroundSize: 'cover',
	marginBottom: 25,
}));
