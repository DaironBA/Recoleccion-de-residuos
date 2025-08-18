import { useEffect, useRef, useState } from 'react';
import AuthService from '../services/authService';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

const UserProfile = ({ user }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const popupRef = useRef(null);
    const navigate = useNavigate();
    
    const userActions = [
        { label: "Mi perfil", onClick: () => navigate('/perfil')  },
        { label: "Mi reporte", onClick: () => navigate('/reporte') , roles: [1] },
        { label: "Cerrar sesión", onClick: () => handleSignOut() },
    ];

    // Función para manejar el clic y alternar la visibilidad del popup
    const togglePopup = (e) => {
        e.stopPropagation();
        setIsPopupVisible(prev => !prev);
    };

    const handleClickOutside = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            setIsPopupVisible(false);
        }
    };
    useEffect(() => {
        if (isPopupVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            // Limpiar el evento cuando el componente se desmonte
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isPopupVisible]);

    const authService = new AuthService();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        authService.logout(dispatch);
        navigate('/login');
    };

    return (
        <div>
            <div onClick={togglePopup} className="flex items-center space-x-4 bg-opaque-gray p-2 rounded-tr-lg cursor-pointer">
                <span className="text-primary-default font-bold">
                    {user.name}
                </span>
            </div>

            {/* Popup que se muestra si isPopupVisible es true */}
            {isPopupVisible && (
                <div ref={popupRef} className="absolute top-16 right-4 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <ul className='py-4 w-46'>
                        {userActions.filter(action => !action.roles || action.roles.includes(user.roleId)).map(action => (
                            <li key={action.label} className="cursor-pointer px-4 hover:bg-opaque-gray" onClick={action.onClick}>
                                {action.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
