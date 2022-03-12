import { GlobalButton, GlobalLink } from '../Theme/GlobalTheme';

export default function MasukButton() {
	return (
		<GlobalLink to='/login'>
			<GlobalButton
				sx={{
					display: 'block',
					['@media(max-width : 1200px)']: {
						display: 'none',
					},
				}}
				variant='contained'
				color='secondary'
			>
				Masuk
			</GlobalButton>
		</GlobalLink>
	);
}

export function MasukButtonMenu() {
	return (
		<GlobalLink to='/login'>
			<GlobalButton
				sx={{ padding: '15px ', width: '300px' }}
				variant='contained'
				color='secondary'
			>
				MASUK
			</GlobalButton>
		</GlobalLink>
	);
}
