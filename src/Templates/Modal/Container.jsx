import { Box, Modal } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'fixed',
	zIndex: 1000,
	top: 0,
	left: 0,
	right: 0,
	botom: 0,
});
