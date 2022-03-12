import { Box } from '@mui/material';
import { styled } from '@mui/system';
import cardImage from '../../Assets/Images/cardImage.jpg';

export const CardBook = styled(Box)(props => ({
	aspectRatio: '2 / 3',
	backgroundImage: `url(${cardImage})`,
	backgroundSize: 'cover',
}));
