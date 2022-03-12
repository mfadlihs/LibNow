import { AppBar, Toolbar, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { GlobalButton, GlobalLink } from '../Theme/GlobalTheme';
import icon from '../Assets/Images/icon.png';
import { QuerySearch } from './QuerySearch';
import { Hamburger } from './HamburgerQuery';
import { useState } from 'react';
import { MenuQuery } from './Menu';
import MasukButton from '../Templates/MasukButton';
import ProfileButton from '../Templates/ProfileButton';
import { useAuth } from '../Config/Auth';

const useStyles = makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
}));

const NavSide = styled(Box)({
	display: 'flex',
	flexGrow: 1,
	justifyContent: 'space-between',
	marginLeft: 20,
});

const classes = () => {
	return useStyles();
};

export function SearchNav() {
	const { token } = useAuth();
	const isLogin = true;
	const [active, setActive] = useState(false);

	const handleHamburger = () => {
		setActive(!active);
	};

	const handleQuerySearch = e => {
		e.preventDefault();
	};

	return (
		<>
			<AppBar position='fixed' sx={{ padding: '8px 0' }}>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						['@media(min-width : 1200px)']: {
							paddingRight: '60px',
							paddingLeft: '60px',
						},
					}}
				>
					<GlobalLink to='/'>
						<img height='40px' src={icon} />
					</GlobalLink>
					{/* <NavSide display={['none', 'none', 'none', 'flex']}> */}
					<Box
						components='form'
						onSubmit={handleQuerySearch}
						autoComplete='off'
						display={['none', 'none', 'none', 'block']}
					>
						<QuerySearch />
					</Box>
					<GlobalLink to='/search'>
						<GlobalButton
							sx={{
								display: 'block',
								['@media(max-width : 1200px)']: {
									display: 'none',
								},
							}}
							variant='contained'
							color='tertiary'
						>
							rak buku
						</GlobalButton>
					</GlobalLink>
					<GlobalLink to='/daftar-perpustakaan'>
						<GlobalButton
							sx={{
								display: 'block',
								['@media(max-width : 1200px)']: {
									display: 'none',
								},
							}}
							variant='contained'
							color='tertiary'
						>
							Perpustakaan
						</GlobalButton>
					</GlobalLink>
					{token ? <ProfileButton /> : <MasukButton />}

					{/* </NavSide> */}
					<MenuQuery active={active} />
					<Hamburger
						active={active}
						setActive={setActive}
						handleHamburger={handleHamburger}
					/>
				</Toolbar>
			</AppBar>
			<Box className={classes().toolbar} />
		</>
	);
}
