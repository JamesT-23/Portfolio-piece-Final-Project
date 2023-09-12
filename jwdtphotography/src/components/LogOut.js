/**
 * 
 * @author - James Tatton
 * 
*/

// Importing the required libraries
import { useNavigate } from 'react-router-dom';

// Creating the LogOut component
function LogOut (props) {

    // Setting the navigate function
    const navigate = useNavigate();

    // Setting the authenticated state to false and removing the token from local storage, then navigating to the home page
    props.handleAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/');

}

export default LogOut;