import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Theme/GlobalStyle.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import DaftarPerpustakaan from './Pages/DaftarPerpustakaan';
import { PencarianBuku } from './Pages/PencarianBuku';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />}></Route>
				<Route path='/daftar-perpustakaan' element={<DaftarPerpustakaan />} />
				<Route path='/search' element={<PencarianBuku />} />
			</Routes>
		</>
	);
}

export default App;
