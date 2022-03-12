import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import {
	primary,
	secondary,
	tertiary,
	textPrimary,
	textSecondary,
} from '../Theme/GlobalTheme';
import bookImage from '../Assets/Images/goodHabits.jpg';

const ImageBookContainer = styled(Box)({
	padding: '10px 20px',
	backgroundColor: primary,
	borderRadius: '20px',
	width: 'min-content',
	margin: 'auto',
});

const ImageBookContent = styled(Box)({
	aspectRatio: '3 / 4',
	backgroundImage: `url(${bookImage})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '329px',
});

export function ImageBook() {
	return (
		<Grid item lg={3} md={4} xs={12}>
			<ImageBookContainer>
				<ImageBookContent />
			</ImageBookContainer>
		</Grid>
	);
}
