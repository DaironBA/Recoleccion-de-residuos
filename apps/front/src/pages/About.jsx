import Nav from "../components/Nav";
import Footer from "../components/footer";

function About() {
  return (
    <>
      <Nav />
      <main>
        {/* Sección Hero para Sobre Nosotros */}
        <div
          className="relative bg-gray-200 py-20 text-center text-gray-800"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/025/294/403/small/top-view-fresh-green-leaves-with-raindrops-texture-ai-generated-photo.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white opacity-70"></div>
          <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Somos una empresa dedicada a transformar la gestión de residuos
              domésticos, haciendo del reciclaje un hábito sencillo, accesible y
              gratificante para todos.
            </p>
          </div>
        </div>

        {/* Sección de Nuestra Misión */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Imagen de la Misión a la izquierda */}
              <div>
                <img
                  src="https://as2.ftcdn.net/jpg/05/51/24/75/1000_F_551247596_gEIf1NS7ggVLTnSidELajYpF0Llt3pr1.jpg"
                  alt="Nuestra Misión"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              {/* Contenido de la Misión a la derecha, con texto centrado */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nuestra Misión
                </h2>
                <p className="text-lg text-gray-600">
                  Nuestra misión es empoderar a las comunidades para que
                  participen activamente en la sostenibilidad ambiental. Mediante
                  nuestro servicio de recolección especializado, facilitamos la
                  separación y el tratamiento adecuado de residuos orgánicos,
                  inorgánicos y peligrosos, contribuyendo a un planeta más verde
                  y limpio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Nuestros Valores */}
        <div className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nuestros Valores
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
              {/*Sostenibilidad */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-2">Sostenibilidad</h3>
                <p className="text-gray-600">
                  Estamos comprometidos con prácticas que protegen el medio ambiente y promueven la economía circular.
                </p>
              </div>
              {/*Comunidad */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-2">Comunidad</h3>
                <p className="text-gray-600">
                  Creemos en el poder de la acción colectiva. Fomentamos la
                  participación ciudadana y trabajamos mano a mano con las
                  comunidades para construir un futuro más limpio para todos.
                </p>
              </div>
              {/*Innovación */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300 hover:bg-gray-50 hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Utilizamos la tecnología para optimizar la gestión de residuos
                  y ofrecer soluciones creativas que hagan del reciclaje un
                  proceso más eficiente y accesible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de contacto */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para unirte?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a transformar tus hábitos y
              contribuir a un planeta más verde.
            </p>
            <a
              href="/contact"
              className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;