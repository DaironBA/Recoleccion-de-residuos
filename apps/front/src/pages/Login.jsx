import InputText from "../components/InputText";
import { useNavigate } from "react-router-dom";
import Img from "../components/Img";
import { Link } from "react-router";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useState } from "react";
import LoginLayout from "../components/LoginLAyout";
import AuthService from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";

function Login() {
  // Imports
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authService = new AuthService();

  // State
  const [showIcon, setShowIcon] = useState(EyeOff);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Variables
  const image = <Img src="images/login.png" alt="Login" />;

  // Functions

const validateForm = () => {
    let isValid = true;

    // Email Validation
    if (!email) {
      setEmailError("El correo electrónico es obligatorio.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password Validation
    if (!password) {
      setPasswordError("La contraseña es obligatoria.");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const user = await authService.login({ email: email, password: password });

    if (user) {
      dispatch(setUser(user));
      navigate("/");
    }else {
      console.log("Error al iniciar sesión");
    }
  };

  const handleEndIconClick = () => {
    setShowIcon(showIcon === EyeOff ? Eye : EyeOff);
  };

  return (

    <LoginLayout image={image} imagePhrase="Pequeñas acciones grandes cambios">
      <h1 className="text-3xl font-bold text-center mb-10">Inicio de sesión</h1>
          <form className='flex flex-col pr-8'  onSubmit={handleLogin}>
            <div className="flex flex-col gap-8">

              <div className="">
                <InputText 
                  type="email"
                  label="Correo electrónico"
                  id="email"
                  name="email"
                  placeholder="Ingrese su correo electrónico"
                  startIcon={User}
                  required={false}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
              </div>
              <div className="">
                <InputText 
                  type={showIcon === Eye ? "text" : "password"}
                  label="Contraseña"
                  id="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  startIcon={Lock}
                  endIcon={showIcon}
                  onEndIconClick={handleEndIconClick} 
                  required={false}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
              </div>
            </div>
            <div className="mt-4">
              <Link to="/register">
                <p className="text-xs mb-2">¿No tienes una cuenta? <u>Regístrate aquí</u></p>
              </Link>
              <Link to="/forgot-password">
                <p className="text-xs underline">¿Olvidaste tu contraseña?</p>
              </Link>
            </div>
            <div className="max-w-60 w-[80%] pr-4 md:pr-0 mx-auto">
              <button type="submit" className="bg-black text-white text-xs py-4 mt-8 w-full cursor-pointer hover:bg-black/80">Iniciar sesión</button>
            </div>
          </form>
    </LoginLayout>
  );
}

export default Login;