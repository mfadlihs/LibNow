import { Box } from '@mui/material';
import { styled } from '@mui/system';
import libraryImage from '../../Assets/Images/libraryImage.png';

export const PhotoProfile = styled(Box)(props => ({
	width: 153,
	height: 153,
	borderRadius: '50%',
	backgroundImage: `url(${libraryImage})`,
	backgroundSize: 'cover',
	margin: 'auto',
	marginBottom: 20,
}));
