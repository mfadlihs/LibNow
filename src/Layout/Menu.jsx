import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useAuth } from '../Config/Auth';
import { MasukButtonMenu } from '../Templates/MasukButton';
import ProfileButton, { ProfileButtonMenu } from '../Templates/ProfileButton';
import {
	GlobalButton,
	GlobalLink,
	primary,
	secondary,
	tertiary,
} from '../Theme/GlobalTheme';
import { QueryMenuSearch } from './QueryMenuSearch';
import { QuerySearch } from './QuerySearch';

const WrapperMenu = styled(Box)(props => ({
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	height: '100vh',
	backgroundColor: '#00000099',
	position: 'fixed',
	zIndex: 100,
	top: 0,
	right: 0,
	left: 0,
	transition: 'all 0.5s ease-in-out',
	display: 'none',

	['@media(max-width : 1200px)']: {
		display: 'flex',
	},

	'&': !props.active && {
		top: '-100%',
	},
}));

export function MenuQuery({ active }) {
	const handleQuerySearch = e => {
		e.preventDefault();
	};
	const { token } = useAuth();

	return (
		<WrapperMenu active={active}>
			<form autoComplete='off' onSubmit={handleQuerySearch}>
				<QueryMenuSearch />
			</form>
			<GlobalLink to='/search'>
				<GlobalButton
					sx={{
						marginTop: '20px',
						padding: '15px ',
						marginBottom: '20px',
						width: '300px',
					}}
					variant='contained'
					color='tertiary'
				>
					RAK BUKU
				</GlobalButton>
			</GlobalLink>
			<GlobalLink to='/daftar-perpustakaan'>
				<GlobalButton
					sx={{ padding: '15px ', width: '300px', marginBottom: '20px' }}
					variant='contained'
					color='tertiary'
				>
					DAFTAR PERPUSTAKAAN
				</GlobalButton>
			</GlobalLink>
			{/* <GlobalLink to='/login'>
				<GlobalButton
					sx={{ padding: '15px ', width: '300px' }}
					variant='contained'
					color='secondary'
				>
					MASUK
				</GlobalButton>
			</GlobalLink> */}
			{token ? <ProfileButtonMenu /> : <MasukButtonMenu />}
		</WrapperMenu>
	);
}
