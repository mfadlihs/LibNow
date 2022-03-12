import { Box } from '@mui/material';
import { ConfirmBox } from '../Templates/ConfirmBox';
import { Container } from '../Layout/Container';

export default function ReqConfirm() {
	return (
		<Container
			// sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			sx={{
				paddingBottom: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<ConfirmBox></ConfirmBox>
		</Container>
	);
}
