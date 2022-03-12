import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

export function Container({ children, sx }) {
	return (
		<Box
			minHeight='100vh'
			paddingBottom='40px'
			paddingTop='40px'
			px={['30px', '40px', '50px', '69px']}
			sx={sx}
		>
			{children}
		</Box>
	);
}
