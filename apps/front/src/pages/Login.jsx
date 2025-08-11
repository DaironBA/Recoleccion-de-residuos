import InputText from "../components/InputText";
import { useNavigate } from "react-router-dom";
import Img from "../components/Img";
import { Link } from "react-router";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import LoginLayout from "../components/LoginLAyout";

function Login() {
  const navigate = useNavigate();
  const [showIcon, setShowIcon] = useState(EyeOff);
  const image = <Img src="images/login.png" alt="Login" />;

  const handleEndIconClick = () => {
    setShowIcon(showIcon === EyeOff ? Eye : EyeOff);
  };

  return (

    <LoginLayout image={image} imagePhrase="Pequeñas acciones grandes cambios">
      <h1 className="text-3xl font-bold text-center mb-10">Inicio de sesión</h1>
          <form action="" className='flex flex-col gap-8 pr-8'>
            <InputText 
              type="email"
              label="Correo electrónico"
              id="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              required={false}
            />
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
            />
          </form>
          <div className="mt-4">
            <Link to="/register">
              <p className="text-xs mb-2">¿No tienes una cuenta? <u>Regístrate aquí</u></p>
            </Link>
            <Link to="/forgot-password">
              <p className="text-xs underline">¿Olvidaste tu contraseña?</p>
            </Link>
          </div>
          <div className="mx-auto">
            <button onClick={() => {navigate("/")}} className="bg-black text-white text-xs py-4 mt-8 w-60 cursor-pointer hover:bg-black/80">Iniciar sesión</button>
          </div>
    </LoginLayout>
  );
}

export default Login;