import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';

export function ConfirmBox() {
	const [time, setTime] = useState(0);
	const [detik, setDetik] = useState(0);
	const [menit, setMenit] = useState(0);
	const [value, setValue] = useState(0);

	setTimeout(() => {
		setTime(time + 1);
		setDetik(59 - (time % 60));
		setMenit(29 - Math.floor(time / 60));
		setValue((time * 100) / 1800);
	}, 1000);

	return (
		<ConfirmContainer padding={['40px 30px', '40px 100px']}>
			<TimerContainer>
				<CircularProgress
					color='secondary'
					variant='determinate'
					value={value}
					size={128}
				></CircularProgress>
				<TimerLabel variant='button'>
					{menit} : {detik}
				</TimerLabel>
			</TimerContainer>
			<Typography textAlign='center' marginBottom='18px' variant='h4'>
				Anda berhasil melakukan permintaan pinjam!
			</Typography>
			<Typography marginBottom='50px' textAlign='center'>
				Tunggu maksimal 30 menit untuk mendapatkan konfirmasi permintaan kamu
			</Typography>
			<ButtonContainer>
				<GlobalButton variant='contained' color='complementary1'>
					batal
				</GlobalButton>
				<GlobalButton color='tertiary' variant='contained'>
					oke
				</GlobalButton>
			</ButtonContainer>
		</ConfirmContainer>
	);
}
const ConfirmContainer = styled(Box)({
	backgroundColor: primary,
	boxShadow: ' 0px 0px 5px 0px #00000040',
	borderRadius: 20,
	width: '440px',
});

const TimerLabel = styled(Typography)({
	position: 'absolute',
	top: '45%',
	left: 0,
	right: 0,
	textAlign: 'center',
});

const TimerContainer = styled(Box)({
	position: 'relative',
	width: 'max-content',
	margin: 'auto',
	marginBottom: 40,
});

const ButtonContainer = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
});
