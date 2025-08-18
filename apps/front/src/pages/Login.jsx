import InputText from "../components/InputText";
import { useNavigate } from "react-router-dom";
import Img from "../components/Img";
import { Link } from "react-router";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LoginLayout from "../components/LoginLAyout";
import AuthService from "../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/actions/userActions";
import Footer from "../components/footer";
import Nav from "../components/Nav"
import { changeTitle } from "../utils/changeTitle";
import BlackButton from "../components/BlackButton";

function Login() {

  // Imports
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authService = new AuthService();
  changeTitle('Ingresar | Recolección de Residuos');

  const user = useSelector((state) => state.user.user);

  if (user) {
    navigate("/");
  }
  // State
  const [showIcon, setShowIcon] = useState(EyeOff);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Variables
  const image = <Img src="images/login.png" alt="Login" />;

  // Functions

  const validateForm = () => {
    const emailValid = emailRef.current.isValid();
    const passwordValid = passwordRef.current.isValid();

    if (!emailValid || !passwordValid) {
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const user = await authService.login({ email: emailRef.current.getValue(), password: passwordRef.current.getValue() });
    if (user) {
      let routeToGo;
      switch (user.roleId) {
        case 1:
          routeToGo = "/reporte";
          break;
        case 2:
        case 3:
          routeToGo = "/";
          break;
        default:
          routeToGo = "/";
      }
      dispatch(setUser(user));
      navigate(routeToGo);
    }else {
      console.log("Error al iniciar sesión");
    }
  };

  const handleEndIconClick = () => {
    setShowIcon(showIcon === EyeOff ? Eye : EyeOff);
  };

  return (
  <>
    <Nav />

    <LoginLayout image={image} imagePhrase="Pequeñas acciones grandes cambios">
      <h1 className="text-3xl font-bold text-center mb-10">Inicio de sesión</h1>
      <form className="flex flex-col pr-8" onSubmit={handleLogin}>
        <div className="flex flex-col gap-8">
          <div>
            <InputText
              ref={emailRef}
              type="email"
              label="Correo electrónico"
              id="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              startIcon={User}
              required={true}
              validations={['email']}
            />
          </div>

          <div>
            <InputText
              ref={passwordRef}
              type={showIcon === Eye ? "text" : "password"}
              label="Contraseña"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              startIcon={Lock}
              endIcon={showIcon}
              onEndIconClick={handleEndIconClick}
              required={true}
              min={8}
            />
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

        <div className="max-w-60 w-[80%] pr-4 md:pr-0 mx-auto pb-20 md:pb-0">
          <BlackButton text="Iniciar sesión" />
        </div>
      </form>
    </LoginLayout>

    <Footer />
  </>
);

}

export default Login;