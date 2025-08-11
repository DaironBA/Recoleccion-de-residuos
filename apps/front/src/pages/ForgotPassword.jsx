import Img from "../components/Img";
import LoginLayout from "../components/LoginLAyout";

function ForgotPassword() {
    const forgotPasswordImage = <Img src="images/forgot-password.png" alt="Forgot Password" />;
    return (
        <LoginLayout image={forgotPasswordImage} imagePhrase="Juntos construimos un futuro más limpio">
            <h1 className="text-3xl font-bold text-center mb-10">¿Olvidó su contraseña?</h1>
        </LoginLayout>
    );
}

export default ForgotPassword;