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
