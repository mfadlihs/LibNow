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
import BuktiPembayaran from './Pages/BuktiPeminjaman';
import Profile from './Pages/Profile';
import AkunSaya from './Pages/Profile/AkunSaya';
import RiwayatPinjam from './Pages/Profile/RiwayatPinjam';
import ReqConfirm from './Pages/ReqConfirm';
import { AuthContext } from './Config/Auth';
import { PrivateRoute, RestrictedRoute } from './Config/PrivateRoute';
import { ModalLogin } from './Templates/Modal';
import DetailPerpustakaan from './Pages/DetailPerpustakaan';

function App() {
	const [id, setId] = useState(JSON.parse(localStorage.getItem('id')));
	const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));

	const SetAndGetToken = (token, id) => {
		localStorage.setItem('token', JSON.stringify(token));
		localStorage.setItem('id', JSON.stringify(id));
		setToken(token);
		setId(id);
	};

	return (
		<>
			<AuthContext.Provider value={{ token, id, SetAndGetToken }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/login'
						element={
							<RestrictedRoute>
								<Login />
							</RestrictedRoute>
						}
					></Route>
					<Route
						path='/signup'
						element={
							<RestrictedRoute>
								<SignUp />
							</RestrictedRoute>
						}
					/>
					<Route path='/daftar-perpustakaan' element={<DaftarPerpustakaan />} />
					<Route path='/search' element={<PencarianBuku />} />
					<Route path='/detail-buku/:buku' element={<DetailBuku />} />
					<Route path='/profile/:profile' element={<Home />} />
					<Route path='/bukti-peminjaman/:buku' element={<BuktiPembayaran />} />
					<Route
						path='/profile'
						element={
							<PrivateRoute>
								<Profile />
							</PrivateRoute>
						}
					>
						<Route path='' element={<AkunSaya />} />
						<Route path='riwayat-pinjam' element={<RiwayatPinjam />} />
					</Route>
					<Route
						path='/req-confirm'
						element={
							<PrivateRoute>
								<ReqConfirm />
							</PrivateRoute>
						}
					/>
					<Route
						path='/detail-perpustakaan/:id'
						element={<DetailPerpustakaan />}
					/>
				</Routes>
			</AuthContext.Provider>
		</>
	);
}

export default App;
