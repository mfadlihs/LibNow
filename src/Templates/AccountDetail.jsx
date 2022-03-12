import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { GlobalButton } from '../Theme/GlobalTheme';

export const AccoutDetailContainer = styled(Box)({
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gap: '40px 28px',
});

export const UbahButton = styled('span')({
	color: '#5D5FEF',
	textDecoration: 'underline',
	marginLeft: 5,
	cursor: 'pointer',
});

export const SimpanButton = () => {
	return (
		<Box width='max-content' margin='auto'>
			<GlobalButton variant='contained' color='tertiary'>
				SIMPAN
			</GlobalButton>
		</Box>
	);
};
