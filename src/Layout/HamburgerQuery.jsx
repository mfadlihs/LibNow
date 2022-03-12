import { ConstructionOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect } from 'react';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';

const HamburgerContainer = styled(Box)({
	display: 'none',
	position: 'relative',
	['@media(max-width : 1200px)']: {
		display: 'block',
	},
});

const HamburgerButton = styled(Box)(props => ({
	width: '25px',
	height: '5px',
	borderRadius: '10px',
	backgroundColor: secondary,
	transition: 'all 0.5s ease-in-out',

	'&': props.active && {
		position: 'relative',
		zIndex: 2000,
		background: 'transparent',
	},

	'&::after': !props.active
		? {
				position: 'absolute',
				content: '""',
				display: 'block',
				top: 10,
				width: '25px',
				borderRadius: '10px',
				height: '5px',
				backgroundColor: secondary,
				transition: 'all 0.5s ease-in-out',
		  }
		: {
				position: 'absolute',
				content: '""',
				display: 'block',
				top: 10,
				width: '25px',
				borderRadius: '10px',
				height: '5px',
				backgroundColor: secondary,
				transition: 'all 0.5s ease-in-out',
				transform: 'translateY(-10px) rotate(45deg)',
		  },

	'&:hover': {
		cursor: 'pointer',
	},

	'&::before': !props.active
		? {
				position: 'absolute',
				content: '""',
				display: 'block',
				top: -10,
				width: '25px',
				borderRadius: '10px',
				height: '5px',
				backgroundColor: secondary,
				transition: 'all 0.5s ease-in-out',
		  }
		: {
				position: 'absolute',
				content: '""',
				display: 'block',
				top: -10,
				width: '25px',
				borderRadius: '10px',
				height: '5px',
				backgroundColor: secondary,
				transition: 'all 0.5s ease-in-out',
				transform: 'translateY(10px) rotate(-45deg)',
		  },
}));

export function Hamburger(props) {
	const { active, setActive, handleHamburger } = props;

	const handle = () => {
		setActive(!active);
	};

	return (
		<HamburgerContainer onClick={handle} active={active}>
			<HamburgerButton active={active}></HamburgerButton>
		</HamburgerContainer>
	);
}
