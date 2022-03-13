import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import { Container } from './Modal/Container';
import { Login } from './Modal/Login';
import { SignUp } from './Modal/Signup';
import { Wrapper } from './Modal/Wrapper';

export function ModalLogin(props) {
	const { open, handleClose, handleOpen } = props;

	const [isLogin, setIsLogin] = useState(false);

	return (
		<>
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
