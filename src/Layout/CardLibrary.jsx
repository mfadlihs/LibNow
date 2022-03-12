import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect } from 'react';

const CardContainer = styled(Box)({
	borderRadius: 20,
	padding: '34px 38px',
	marginBottom: 31,
	backgroundColor: primary,
	display: 'flex',
	alignItems: 'center',
	columnGap: '20px',

	['@media(max-width : 900px)']: {
		display: 'block',
	},
	['@media(max-width : 600px)']: {
		padding: '30px 25px',
	},
});

const CardSection = styled(Box)({
	marginTop: '17px',
	display: 'flex',
	alignItems: 'center',
});

const CardButton = styled(GlobalButton)({
	['@media(max-width : 900px)']: {
		marginTop: '20px',
		width: '100%',
		padding: '12px 0',
	},
});

export function CardLibrary(props) {
	const { data } = props;

	const { city, district, libraryname, neigborhoods, province } = data;

	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<CardContainer>
			<Box sx={{ flexGrow: 1 }}>
				<Typography variant='h3'>{libraryname}</Typography>
				<CardSection>
					<LocationOnIcon sx={{ marginRight: '13px' }} fontSize='small' />
					<Typography>
						{neigborhoods}, {district}, {city}, {province}
					</Typography>
				</CardSection>
				<CardSection>
					<AccessTimeIcon sx={{ marginRight: '13px' }} fontSize='small' />
					<Typography>8.30 - 15.30 WIB</Typography>
				</CardSection>
			</Box>
			<GlobalLink to='/detail-perpustakaan/2'>
				<CardButton variant='contained' color='tertiary'>
					KUNJUNGI PERPUSTAKAAN
				</CardButton>
			</GlobalLink>
		</CardContainer>
	);
}
