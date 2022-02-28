import { createTheme } from '@mui/material';

export const Theme = createTheme({
	palette: {
		primary: {
			main: '#898989',
			// main: '#ff0000',
			// main: '#00ffff',
		},
		secondary: {
			main: '#00ffff',
		},
		tersier: {
			main: '#fff',
		},
		text: {
			primary: '#000',
		},
		black: {
			main: '#1a1a1a',
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: "'Inter', sans-serif",
		fontSize: 12,
		fontWeightRegular: 500,
		h1: {
			fontSize: 24,
			fontWeight: 600,
		},
		h2: {
			fontSize: 16,
			fontWeight: 600,
		},
		h3: {
			fontSize: 14,
			fontWeight: 600,
		},
	},
});
