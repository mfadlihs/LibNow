import { Box, Grid } from '@mui/material';
import { Content, LibProfile } from '../Component/DetailPerpustakaanComp';
import { Container } from '../Layout/Container';
import { SearchNav } from '../Layout/SearchNav';
import { Wrapper } from '../Templates/DetailPerpustakaan/Wrapper';

export default function DetailPerpustakaan() {
	return (
		<>
			<SearchNav />
			<Container>
				<Wrapper container columnSpacing={['40px']}>
					<LibProfile />
					<Content />
				</Wrapper>
			</Container>
		</>
	);
}
