import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import { Container } from './Modal/Container';
import { Login } from './Modal/Login';
import { SignUp } from './Modal/Signup';
import { Wrapper } from './Modal/Wrapper';

export function ModalLogin() {
	const [open, setOpen] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	return (
		<>
			<Button onClick={handleOpen} variant='contained' color='tertiary'>
				buka
			</Button>
			<Container onClose={handleClose} open={open}>
				<Wrapper>
					{/* <Login /> */}
					{isLogin ? (
						<Login setisLogin={setIsLogin} />
					) : (
						<SignUp setisLogin={setIsLogin} />
					)}
					{/* <SignUp /> */}
				</Wrapper>
			</Container>
		</>
	);
}
