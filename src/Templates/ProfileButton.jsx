import { GlobalButton, GlobalLink } from '../Theme/GlobalTheme';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ProfileButton() {
	return (
		<GlobalLink to='/profile'>
			<GlobalButton
				sx={{
					['@media(max-width : 1200px)']: {
						display: 'none',
					},
				}}
				variant='contained'
				color='secondary'
				startIcon={<AccountCircleIcon />}
			>
				Akun Saya
			</GlobalButton>
		</GlobalLink>
	);
}
export function ProfileButtonMenu() {
	return (
		<GlobalLink to='/profile'>
			<GlobalButton
				sx={{ padding: '15px ', width: '300px' }}
				variant='contained'
				color='secondary'
				startIcon={<AccountCircleIcon />}
			>
				Akun Saya
			</GlobalButton>
		</GlobalLink>
	);
}
