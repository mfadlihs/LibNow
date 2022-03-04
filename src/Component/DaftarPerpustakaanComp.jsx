import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import {
	GlobalButton,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import { Theme } from '../Theme/GlobalTheme';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const useStyles = makeStyles(theme => ({
	cardLibrary: {
		borderRadius: 20,
		padding: '34px 38px',
		marginBottom: 31,
		backgroundColor: theme.palette.primary.main,
		display: 'flex',
		alignItems: 'center',
	},
}));

const classes = () => {
	return useStyles();
};

const CardSection = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	marginTop: '17px',
});

export function CardLibrary() {
	return (
		<Box className={classes().cardLibrary}>
			<Box sx={{ flexGrow: 1 }}>
				<Typography variant='h3'>Perpustakaan Kota Malang</Typography>
				<CardSection>
					<LocationOnIcon sx={{ marginRight: '13px' }} fontSize='small' />
					<Typography>
						Jl. Ijen No.30A, Oro-oro Dowo, Klojen, Kota Malang, Jawa Timur 65119
					</Typography>
				</CardSection>
				<CardSection>
					<AccessTimeIcon sx={{ marginRight: '13px' }} fontSize='small' />
					<Typography>8.30 - 15.30 WIB</Typography>
				</CardSection>
			</Box>
			<GlobalButton variant='contained' color='tertiary'>
				KUNJUNGI PERPUSTAKAAN
			</GlobalButton>
		</Box>
	);
}

const CardLibraryMedia = styled('div')({
	height: 16,
	marginBottom: 8,
});

export const Content = styled('div')({
	padding: '0px 69px 0',
});
