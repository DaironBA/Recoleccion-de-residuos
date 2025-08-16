import Img from "../components/Img";
import LoginLayout from "../components/LoginLAyout";
import Footer from "../components/footer";
import Nav from "../components/Nav";

function Register() {
  const registerImage = <Img src="images/register.png" alt="Register" />;

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
        {/* Aquí puedes agregar los campos del formulario de registro */}
      </LoginLayout>
      <Footer />
    </>
  );
}

export default Register;
