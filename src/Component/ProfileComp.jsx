import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { borderRadius, styled } from '@mui/system';
import profileImage from '../Assets/Images/profileImage.jpg';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';
import {
	primary,
	secondary,
	tertiary,
	textPrimary,
	textSecondary,
} from '../Theme/GlobalTheme';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	accountNav: {
		display: 'flex',
		alignItems: 'center',
		width: '244px',
	},
}));

const classes = () => {
	return useStyles();
};

export const Container = styled(Box)({
	padding: '55px 66px',
	backgroundColor: '#e9e9e9',
	display: 'flex',
	alignItems: 'flex-start',
	gap: '60px',
	minHeight: '100vh',
});

export function AccountNav() {
	const [nav, setNav] = useState('akunSaya');

	return (
		<Box>
			<Avatar />
			<Divider />
			<LinkNav to=''>
				<Section
					onClick={() => {
						setNav('akunSaya');
					}}
					active={nav === 'akunSaya' && true}
				>
					<PersonIcon />
					<SectionText variant='button'>Akun Saya</SectionText>
				</Section>
			</LinkNav>
			<LinkNav to='riwayat-pinjam'>
				<Section
					onClick={() => {
						setNav('riwayatPinjam');
					}}
					active={nav === 'riwayatPinjam' && true}
				>
					<HistoryIcon />
					<SectionText variant='button'>Riwayat Pinjam</SectionText>
				</Section>
			</LinkNav>
			<Section>
				<LogoutIcon />
				<SectionText variant='button'>Keluar</SectionText>
			</Section>
		</Box>
	);
}

function Avatar() {
	return (
		<Box className={classes().accountNav}>
			<AvatarImage />
			<Typography variant='h4'>Fadli Wong</Typography>
		</Box>
	);
}

const AvatarImage = styled(Box)({
	width: 60,
	height: 60,
	borderRadius: '50%',
	backgroundImage: `url(${profileImage})`,
	marginRight: 20,
});

const Divider = styled(Box)({
	marginTop: 17,
	height: 0.25,
	backgroundColor: '#000',
	marginBottom: 22,
});

const Section = styled(Box)(props => ({
	padding: '10px 27px',
	userSelect: 'none',
	display: 'flex',
	alignItems: 'center',
	gap: 9,
	color: props.active && secondary,
	'&:hover': !props.active && {
		cursor: 'pointer',
		color: `${textPrimary}70`,
	},
}));

const SectionText = styled(Typography)({
	textTransform: 'none',
});

const LinkNav = styled(Link)({
	textDecoration: 'none',
	color: 'unset',
});
