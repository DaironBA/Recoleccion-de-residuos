import Nav from "../components/Nav";
import Footer from "../components/footer";
import { changeTitle } from "../utils/changeTitle";

function Services() {
  changeTitle('Servicios | Recolección de Residuos');
  return (
    <>
      <Nav />
      <main>
        {/* Sección de Título de la Página */}
        <div className="relative bg-gray-200 py-20 text-center text-gray-800"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/025/294/403/small/top-view-fresh-green-leaves-with-raindrops-texture-ai-generated-photo.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <div className="absolute inset-0 bg-white opacity-70"></div>
          <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Nuestros Servicios de Recolección
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Ofrecemos soluciones personalizadas para cada necesidad, garantizando una gestión de residuos responsable y eficiente.
            </p>
          </div>
        </div>

        {/* Sección de Tarjetas de Servicios */}
        <div className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluciones para Todos</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Descubre nuestros servicios de recolección y elige el que mejor se adapte a ti o a tu organización.
            </p>
            {/* Se cambia la clase a lg:grid-cols-4 para 4 columnas en pantallas grandes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Tarjeta 1: Residuos Orgánicos */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">RESIDUOS ORGÁNICOS</h3>
                <img 
                  src="https://revistamundovending.com/wp-content/uploads/2025/01/Dialogo-Intracluster.jpg" 
                  alt="Icono de residuos orgánicos" 
                  className="w-100 h-80 mx-auto mb-4" 
                />
                <p className="text-gray-600 text-sm">
                  Recolección semanal de residuos orgánicos de tu hogar o negocio. Facilitamos el compostaje y la reducción de desechos en vertederos, promoviendo un ciclo de vida natural y sostenible.
                </p>
              </div>

              {/* Tarjeta 2: Hogares */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">HOGARES</h3>
                <img 
                  src="https://cdn.pixabay.com/photo/2019/11/12/19/14/recycle-4621892_1280.jpg" 
                  alt="Icono de hogar" 
                  className="w-60 h-80 mx-auto mb-4" 
                />
                <p className="text-gray-600 text-sm">
                  Servicio de recolección a domicilio para familias. Te proporcionamos las herramientas y la guía para separar tus residuos de manera correcta (plástico, papel, vidrio) y nos encargamos del resto.
                </p>
              </div>

              {/* Tarjeta 3: Empresas */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">EMPRESAS</h3>
                <img 
                  src="https://atos.net/wp-content/uploads/2024/09/GettyImages-672270251-e1595825532812-1.jpg" 
                  alt="Icono de empresa" 
                  className="w-80 h-80 mx-auto mb-4" 
                />
                <p className="text-gray-600 text-sm">
                  Soluciones de gestión de residuos a la medida de tu empresa. Desde el reciclaje de materiales de oficina hasta el manejo de desechos industriales, te ayudamos a cumplir con tus objetivos de sostenibilidad.
                </p>
              </div>

              {/* Tarjeta 4: Residuos Peligrosos */}
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">RESIDUOS PELIGROSOS</h3>
                <img
                  src="https://www.leonardo-gr.com/wp-content/uploads/2019/06/como-guardar-residuos-peligrosos.png"
                  alt="Icono de residuos peligrosos"
                  className="w-100 h-80 mx-auto mb-4"
                />
                <p className="text-gray-600 text-sm">
                  Manejo seguro y responsable de residuos como baterías, pilas, aceites y componentes electrónicos. Colaboramos con empresas certificadas para garantizar su tratamiento adecuado y evitar la contaminación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Services;