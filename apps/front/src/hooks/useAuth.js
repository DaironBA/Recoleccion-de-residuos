import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { logoutUser, setUser } from '../redux/actions/userActions';
import UserService from '../services/userService';

const useAuth = () => {
  const dispatch = useDispatch();
  const userService = new UserService();
  useEffect(() => {
    const checkTokenExpiration = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            localStorage.removeItem('authToken');
            dispatch(logoutUser());
          }else {
            const user = (await userService.get('', {
              id: decodedToken.id,
              relations: ['recolecciones']
            }))[0]
            dispatch(setUser(user));
          }
        } catch (error) {
        }
      }else {
        dispatch(logoutUser());
      }
    };

    checkTokenExpiration();
  }, [dispatch]);
};

export default useAuth;
