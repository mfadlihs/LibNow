import { Box, Button, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled, width } from '@mui/system';
import iconLogin from '../Assets/Images/iconLogin.png';
import owl from '../Assets/Images/owlLogin.png';
import { primary, secondary, tertiary } from '../Theme/GlobalTheme';

export const Container = styled('div')({
	display: 'flex',
	height: '100vh',
});

const useStyles = makeStyles({
	iconLogin: {},
	imageSide: {
		height: '100%',
		flexBasis: '35%',
		backgroundColor: '#FDF4AF',
		position: 'relative',
	},
});

const classes = () => {
	return useStyles();
};

// ===================================================
// ============== Bagian Sebelah kiri  ===============
// ===================================================
export function ImageSide() {
	return (
		<Box className={classes().imageSide}>
			<Logo src={iconLogin} />
			<Owl src={owl} />
		</Box>
	);
}

const Logo = styled('img')({
	position: 'absolute',
	top: '25%',
	left: '136px',
});

const Owl = styled('img')({
	position: 'absolute',
	right: '-25%',
	top: '25%',
});

// ===================================================
// ============== Bagian Sebelah kanan ===============
// ===================================================
export const Wrapper = styled('div')({
	flexBasis: '65%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '255px 192px',
});

export const WrapperLogin = styled('div')({
	width: '100%',
});

export const LoginButton = styled(Button)({
	height: 'auto',
});

export const Header = styled(Box)({
	marginBottom: 67,
});

export const InputForm = styled(TextField)({
	marginBottom: '37px',
});

export const NavigateButton = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});
