import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardBook } from '../Templates/DetailPerpustakaan/CardBook';
import { PhotoProfile } from '../Templates/DetailPerpustakaan/PhotoProfile';
import { Section } from '../Templates/DetailPerpustakaan/ProfileSection';
import { Wrapper } from '../Templates/DetailPerpustakaan/Wrapper';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
	textPrimary,
	textSecondary,
} from '../Theme/GlobalTheme';

export const LibProfile = () => {
	return (
		<Grid item md={3}>
			<PhotoProfile />
			<Typography marginBottom='30px' variant='h4' textAlign='center'>
				Perpustakaan Kota Malang
			</Typography>
			<Section>
				<Box>??</Box>
				<Typography color='secondary'>32RB Koleksi</Typography>
			</Section>
			<Section>
				<Box>??</Box>
				<Typography color='secondary'>089654321790</Typography>
			</Section>
			<Section>
				<Box>??</Box>
				<Typography color='secondary'>
					Jl. Ijen No.30A, Oro-oro Dowo, Klojen, Kota Malang, Jawa Timur 65119
				</Typography>
			</Section>
		</Grid>
	);
};

export const Content = () => {
	return (
		<Grid item md={9}>
			<Grid rowSpacing='20px' columnSpacing='20px' container>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
					<Grid key={i} item lg={3}>
						<GlobalLink to='/detail-buku/1'>
							<CardBook />
						</GlobalLink>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
