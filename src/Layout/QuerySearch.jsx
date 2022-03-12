import { Box, InputBase } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';

const SearchInput = styled(Box)(props => ({
	display: 'flex',
	alignItems: 'center',
	border: `2px solid ${tertiary}`,
	padding: '2px 16px',
	borderRadius: '4px',
	width: props.active ? '300px' : '500px',
}));

const InputForm = styled(InputBase)(props => ({
	color: props.active && 'white',
}));

export function QuerySearch({ active }) {
	return (
		<SearchInput active={active}>
			<InputForm active={active} fullWidth placeholder='Search' />
			<SearchIcon sx={{ marginLeft: '10px' }} fontSize='small' />
		</SearchInput>
	);
}
