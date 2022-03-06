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
			</Routes>
		</>
	);
}

export default App;
