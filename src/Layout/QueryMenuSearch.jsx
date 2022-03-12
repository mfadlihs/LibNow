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
	width: 300,
}));

const InputForm = styled(InputBase)(props => ({
	color: 'white',
}));

export function QueryMenuSearch() {
	return (
		<SearchInput>
			<InputForm fullWidth placeholder='Search' />
			<SearchIcon
				color='tertiary'
				sx={{ marginLeft: '10px' }}
				fontSize='small'
			/>
		</SearchInput>
	);
}
