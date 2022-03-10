import { Box, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { Container, Heading } from '../../Component/Profile/AkunSayaComp';

export default function AkunSaya() {
	const [userName, setUserName] = useState('mfadlihs');
	const [ubah, setUbah] = useState(false);
	const refInput = useRef(null);

	const userNameHandling = () => {
		if (!ubah) {
			return;
		}
		const inputan = refInput.current.querySelector('input');
		setUserName(inputan.value);
		console.log(userName);
	};

	return (
		<Container>
			<Heading></Heading>
			<TextField
				sx={{ userSelect: 'none' }}
				ref={refInput}
				variant='outlined'
				color='tertiary'
				value={userName}
				onChange={userNameHandling}
			/>
		</Container>
	);
}
