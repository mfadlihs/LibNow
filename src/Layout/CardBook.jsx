import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import cardImage from '../Assets/Images/cardImage.jpg';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const CardContainer = styled(Card)({
	borderRadius: 20,
	boxShadow: '0px 0px 10px 0px #00000040',
});

export function CardBook() {
	return (
		<CardContainer>
			<CardMedia component='img' src={cardImage} />
			<CardContent>
				<Typography variant='h3' gutterBottom>
					Kitab Kawin
				</Typography>
				<Typography gutterBottom color='textSecondary'>
					Laksmi Pamuntjak
				</Typography>
				<Box>
					{[1, 1, 1, 1, 0.5].map((i, index) => {
						if (i === 1) {
							return <StarIcon color='tertiary' />;
						} else if (i === 0.5) {
							return <StarHalfIcon color='tertiary' />;
						}
					})}
				</Box>
				<Typography color='textSecondary' variant='body2'>
					Tersedia di Perpustakaan Malang, 6+
				</Typography>
			</CardContent>
		</CardContainer>
	);
}
