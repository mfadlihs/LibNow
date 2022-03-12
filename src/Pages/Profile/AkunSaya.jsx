import { Box, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import {
	AccountDetail,
	Container,
	Content,
	Heading,
	PhotoSide,
	Side,
} from '../../Component/Profile/AkunSayaComp';
import { SimpanButton } from '../../Templates/AccountDetail';

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
			<Content>
				<Side>
					<AccountDetail />
					<SimpanButton />
				</Side>
				<PhotoSide />
			</Content>
		</Container>
	);
}
