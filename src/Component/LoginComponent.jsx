import { Button, TextField } from '@mui/material';
import { styled, width } from '@mui/system';
const primaryColor = '#898989';
const secondaryColor = '#E5E5E5';
import icon from '../Assets/Images/icon.png';

export const Container = styled('div')({
	display: 'flex',
	height: '100vh',
});

export const ImageSide = styled('div')({
	height: '100%',
	flexBasis: '55%',
	backgroundColor: '#898989',
	backgroundImage: `url(${icon})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
});

export const Wrapper = styled('div')({
	flexBasis: '45%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '0px 50px',
});

export const WrapperLogin = styled('div')({
	width: '100%',
});

export const LoginButton = styled(Button)({
	height: 'auto',
});

export const Header = styled('div')({
	marginBottom: 50,
});

export const InputForm = styled(TextField)({
	marginBottom: '45px',
});

export const ButtonForm = styled(Button)({
	padding: '10px 40px',
});

export const NavigateButton = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});
