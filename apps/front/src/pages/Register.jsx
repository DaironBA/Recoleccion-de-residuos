import Img from "../components/Img";
import LoginLayout from "../components/LoginLAyout";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import InputText from "../components/InputText";
import { Link, Navigate, useNavigate } from "react-router";
import { useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { changeTitle } from "../utils/changeTitle";
import UserService from "../services/userService";
import Alert from "../components/alert";

function Register() {
  const registerImage = <Img src="images/register.png" alt="Register" />;
  const navigate = useNavigate();

  // States
  const [passwordIcon, setPasswordIcon] = useState(EyeOff);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(EyeOff);
  const [globalError, setGlobalError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('info');
  const [onCloseAlert, setOnCloseAlert] = useState(() => () => setShowAlert(false));


  // Ref
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // Services
  const userService = new UserService();

  changeTitle('Registrarse | Recolección de Residuos');

  // functions
  const handleEndIconClick = (field) => {
    if (field === "password") {
      setPasswordIcon(passwordIcon === EyeOff ? Eye : EyeOff);
    } else if (field === "confirmPassword") {
      setConfirmPasswordIcon(confirmPasswordIcon === EyeOff ? Eye : EyeOff);
    }
  };

  const handleShowAlert = (msg, type) => {
    setMessage(msg); 
    setAlertType(type);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const validateForm = () => {
    const nameValid = nameRef.current.isValid();
    const emailValid = emailRef.current.isValid();
    const passwordValid = passwordRef.current.isValid();
    const confirmPasswordValid = confirmPasswordRef.current.isValid();

    if (passwordRef.current.getValue() !== confirmPasswordRef.current.getValue()) {
      setGlobalError("Las contraseñas no coinciden");
      return false;
    }else{
      setGlobalError("");
    }

    if (!nameValid || !emailValid || !passwordValid || !confirmPasswordValid) {
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try{
      await userService.post('', {
        name: nameRef.current.getValue(),
        email: emailRef.current.getValue(),
        password: passwordRef.current.getValue(),
        confirmPassword: confirmPasswordRef.current.getValue()
      });
      setOnCloseAlert(() => () => {
        navigate("/login");
        setShowAlert(false);
      });
      handleShowAlert("Usuario registrado correctamente, ya puede iniciar sesión", "success");
    }catch(error){
      setGlobalError(error.message || "Error al registrar el usuario");
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
         <form className="flex flex-col pr-8" onSubmit={handleRegister}>
            <div className="flex flex-col gap-6">
              <div>
                <InputText
                  ref={nameRef}
                  label="Nombre completo"
                  id="text"
                  name="text"
                  placeholder="Ingrese su nombre"
                  required={true}
                />
              </div>
              <div>
                <InputText
                  ref={emailRef}
                  type="email"
                  label="E-mail"
                  id="email"
                  name="email"
                  placeholder="Ingrese su e-mail"
                  required={true}
                  validations={['email']}
                />
              </div>
              <div>
              <InputText
                ref={passwordRef}
                type={passwordIcon === Eye ? "text" : "password"}
                label="Contraseña"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                required={true}
                endIcon={passwordIcon}
                onEndIconClick={() => handleEndIconClick('password')}
                min={8}
              />
              </div>
              <div>
              <InputText
                ref={confirmPasswordRef}
                type={confirmPasswordIcon === Eye ? "text" : "password"}
                label="Confirmar contraseña"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                required={true}
                endIcon={confirmPasswordIcon}
                onEndIconClick={() => handleEndIconClick('confirmPassword')}
                min={8}
              />
              </div>
             
            </div>
            {globalError && <p className="text-red-500 text-xs">{globalError}</p>}

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
      <Alert message={message} onClose={handleCloseAlert} show={showAlert} type={alertType} />
      </LoginLayout>
      <Footer />
    </>
  );
}

export default Register;
