import {
	AppBar,
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Paper,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import icon from '../Assets/Images/icon.png';
import StarIcon from '@mui/icons-material/Star';
import { Children, useState } from 'react';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import { Link } from 'react-router-dom';
import cardImage from '../Assets/Images/cardImage.jpg';
import jumbotron from '../Assets/Images/jumbotron.jpg';

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: 'blue',
		['@media(min-width : 601px)']: {
			paddingRight: 50,
			paddingLeft: 50,
		},
		height: 300,
	},
	toolbar: theme.mixins.toolbar,
	toolbar2: {
		marginBottom: '40px',
	},

	button: {
		textTransform: 'none',
	},
	jumbotron: {
		height: 304,
		// backgroundColor: secondary,
		backgroundImage: `url(${jumbotron})`,
		position: 'relative',
		padding: '63px 77px',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		width: '100%',
	},
}));

const classes = () => {
	return useStyles();
};

// Jumbotron ==============================

export function Jumbotron() {
	return (
		<Box
			display={['none', 'none', 'none', 'block']}
			className={classes().jumbotron}
		></Box>
	);
}

// =========================================
// ============ Container ==================
// =========================================

export const Container = styled(Box)({
	padding: '0px 69px 66px',
});

// ====================================
// Card ===============================
// ====================================

const CardContainer = styled(Box)(props => ({
	aspectRatio: '2 / 3',
	width: '100%',
	margin: 'auto',
	borderRadius: '8px',
	boxShadow: '0px 0px 10px 0px #00000040',
}));

export function CardBook() {
	return (
		<CardContainer padding={['10px', '15px', '20px']}>
			<Card sx={{ boxShadow: '0' }}>
				<CardMedia
					sx={{ marginBottom: '15px', aspectRatio: '2 / 3' }}
					image={cardImage}
					component='img'
				/>
				<Box>
					<Typography variant='h3' gutterBottom>
						Kitab Kawin
					</Typography>
					<Typography
						sx={{ marginBottom: '8px' }}
						color='textSecondary'
						variant='h4'
					>
						Laksmi Pammuntjak
					</Typography>
					<Box sx={{ marginBottom: '8px' }}>
						{[1, 1, 1, 1, 1].map((i, index) => (
							<StarIcon color='tertiary' fontSize='small' key={index} />
						))}
					</Box>
					<Typography variant='body2'>Perpustakaan Kota Malang, 2+</Typography>
				</Box>
			</Card>
		</CardContainer>
	);
}

const CardWrapper = styled(Box)({
	aspectRatio: '3 / 4',
	width: 315,
});

// =========================================
// ============ Content ====================
// =========================================

export function Content() {
	return (
		<Grid container rowSpacing='48px' columnSpacing={['0px', '30px']}>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, index) => {
				return (
					<Grid lg={4} md={6} sm={6} xs={12} item key={index}>
						<GlobalLink to='/detail-buku/1'>
							<CardBook />
						</GlobalLink>
					</Grid>
				);
			})}
		</Grid>
	);
}
