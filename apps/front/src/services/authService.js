import { logoutUser } from "../redux/actions/userActions";
import AbstractService from "./abstractService";

class AuthService extends AbstractService {

    async login(credentials) {
        const response = await this.post('/login', credentials);
        const token = response.token;
        localStorage.setItem('authToken', token);
        return response.user;
    }

    logout = () => {
        dispatch(logoutUser());
        localStorage.removeItem('authToken');
        history.push('/login');
    };

}

export default AuthService;
