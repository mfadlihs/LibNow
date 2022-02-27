import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Theme/GlobalStyle.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />}></Route>
			</Routes>
		</>
	);
}

export default App;
