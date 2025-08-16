import Nav from "../components/Nav"
import Img from "../components/Img";
import LoginLayout from "../components/LoginLAyout";
import Footer from "../components/footer";


function ForgotPassword() {
    const forgotPasswordImage = <Img src="images/forgot-password.png" alt="Forgot Password" />;
   return (
    <>
      <Nav />
      <LoginLayout
        image={forgotPasswordImage}
        imagePhrase="Juntos construimos un futuro más limpio"
      >
        <h1 className="text-3xl font-bold text-center mb-10">
          ¿Olvidó su contraseña?
        </h1>
        {/* Aquí puedes agregar el formulario de recuperación de contraseña */}
      </LoginLayout>
      <Footer />
    </>
  );
}



export default ForgotPassword;