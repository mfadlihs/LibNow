import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Login />
		</>
	);
}

export default App;
