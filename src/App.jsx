import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Theme/GlobalStyle.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import DaftarPerpustakaan from './Pages/DaftarPerpustakaan';
import { PencarianBuku } from './Pages/PencarianBuku';
import DetailBuku from './Pages/DetailBuku';
import SignUp from './Pages/SignUp';
import BuktiPembayaran from './Pages/BuktiPembayaran';
import Profile from './Pages/Profile';
import AkunSaya from './Pages/Profile/AkunSaya';
import RiwayatPinjam from './Pages/Profile/RiwayatPinjam';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />} />
				<Route path='/daftar-perpustakaan' element={<DaftarPerpustakaan />} />
				<Route path='/search' element={<PencarianBuku />} />
				<Route path='/detail-buku/:buku' element={<DetailBuku />} />
				<Route path='/profile/:profile' element={<Home />} />
				<Route path='/bukti-pembayaran' element={<BuktiPembayaran />} />
				<Route path='/profile' element={<Profile />}>
					<Route path='' element={<AkunSaya />} />
					<Route path='riwayat-pinjam' element={<RiwayatPinjam />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
