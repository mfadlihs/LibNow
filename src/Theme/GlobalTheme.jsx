import { Box, Button, createTheme } from '@mui/material';
import { styled } from '@mui/system';

export const primary = '#898989';
export const secondary = '#E06161';
export const tertiary = '#F8BC61';
export const complementary1 = '#FFF';
export const complementary2 = '#001E1D';
export const complementary3 = '#7B8284';

export const Theme = createTheme({
	palette: {
		primary: {
			main: '#E9E4E5',
		},
		secondary: {
			main: '#E06161',
		},
		tertiary: {
			main: '#F8BC61',
		},
		complementary1: {
			main: '#fff',
		},
		complementary2: {
			main: '#001E1D',
		},
		complementary3: {
			main: '#7B8284',
		},
		text: {
			primary: '#000',
			secondary: 'red',
		},
	},
	typography: {
		fontFamily: "'Inter', sans-serif",
		h2: {
			fontSize: '47px',
			fontWeight: 500,
			lineHeight: '47px',
		},
		h3: {
			fontSize: 33,
			fontWeight: 500,
			lineHeight: '33px',
			letterSpacing: '0.25px',
		},
		h4: {
			fontSize: 19,
			lineHeight: '19px',
			fontWeight: 500,
			letterSpacing: '0.15px',
		},
		body1: {
			fontSize: 16,
			lineHeight: '16px',
			fontWeight: 'normal',
			letterSpacing: '0.5px',
		},
		body2: {
			fontSize: 14,
			lineHeight: '19px',
			fontWeight: 'normal',
			letterSpacing: '0.25px',
		},
		button: {
			fontSize: '14px',
			fontWeight: 500,
			lineHeight: '14px',
			letterSpacing: '1.25px',
		},
	},
});

export function Clear() {
	return <Box sx={{ clear: 'both' }}></Box>;
}
export const GlobalButton = styled(Button)({
	// padding: '10px 40px',
	padding: '9px 16px',
});
