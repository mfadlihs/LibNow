import { useAuth } from './Auth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
	const { token } = useAuth();

	return token ? children : <Navigate to='/login' />;
};

export const RestrictedRoute = ({ children }) => {
	const { token } = useAuth();
	return token ? <Navigate to='/' /> : children;
};
