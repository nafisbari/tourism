import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, user, error, setUser, setError, setIsLoading, logOut } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
                console.log(result.user);
                setError(' ')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div>
            <Button type="submit" onClick={handleGoogleLogin} className="btn-color" variant=" mx-3"><i class="fab fa-google" /> Google Sign In</Button>
            {user.email && <Button onClick={logOut} className="btn-color" variant=" mx-3">Logout <i class="fas fa-arrow-right" /></Button>}
            <p>{error}</p>

        </div>
    );
};

export default Login;