import Img from "../components/Img";
import LoginLayout from "../components/LoginLAyout";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import InputText from "../components/InputText";
import { Link } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Register() {
  const registerImage = <Img src="images/register.png" alt="Register" />;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordIcon, setPasswordIcon] = useState(EyeOff);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(EyeOff);

  const handleEndIconClick = (field) => {
    if (field === "password") {
      setPasswordIcon(passwordIcon === EyeOff ? Eye : EyeOff);
    } else if (field === "confirmPassword") {
      setConfirmPasswordIcon(confirmPasswordIcon === EyeOff ? Eye : EyeOff);
    }
  };

  return (
    <>
      <Nav />
      <LoginLayout
        image={registerImage}
        imagePhrase="Un paso menos para ti, un gran paso para el planeta"
      >
        <h1 className="text-3xl font-bold text-center mb-10">
          Registro de usuario
        </h1>
         <form className="flex flex-col pr-8">
            <div className="flex flex-col gap-6">
              <div>
                <InputText
                  label="Nombre completo"
                  id="text"
                  name="text"
                  placeholder="Ingrese su nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <InputText
                  label="E-mail"
                  id="email"
                  name="email"
                  placeholder="Ingrese su e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
              <InputText 
                type={passwordIcon === Eye ? "text" : "password"}
                label="Contraseña"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                endIcon={passwordIcon}
                onEndIconClick={() => handleEndIconClick('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <div>
              <InputText 
                type={confirmPasswordIcon === Eye ? "text" : "password"}
                label="Confirmar contraseña"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                endIcon={confirmPasswordIcon}
                onEndIconClick={() => handleEndIconClick('confirmPassword')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              </div>
             
            </div>

            <div className="mt-4">
              <Link to="/login">
                <p className="text-xs mb-2">¿Ya tienes una cuenta? <u>Inicia sesión aquí</u></p>
              </Link>
            </div>

            <div className="max-w-60 w-[80%] pr-4 md:pr-0 mx-auto">
              <button type="submit" className="bg-black text-white text-xs py-4 mt-8 w-full cursor-pointer hover:bg-black/80">
                Registrate
              </button>
            </div>
          </form>
      </LoginLayout>
      <Footer />
    </>
  );
}

export default Register;
