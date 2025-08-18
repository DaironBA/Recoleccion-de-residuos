import Nav from "../components/Nav"
import Footer from "../components/footer";
function About() {
    return (
        <>
      <Nav />
      <main>
        {/* Hero Section para Sobre Nosotros */}
        <div className="relative bg-gray-200 py-20 text-center text-gray-800"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/025/294/403/small/top-view-fresh-green-leaves-with-raindrops-texture-ai-generated-photo.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <div className="absolute inset-0 bg-white opacity-70"></div>
          <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Somos una empresa dedicada a transformar la gestión de residuos domésticos, haciendo del reciclaje un hábito sencillo, accesible y gratificante para todos.
.
            </p>
          </div>
        </div>

        {/* Misión y Valores */}
        <div className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestra Misión</h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-600 mb-6">
                  Nuestra misión es empoderar a las comunidades para que participen activamente en la sostenibilidad ambiental. Mediante nuestro servicio de recolección especializado, facilitamos la separación y el tratamiento adecuado de residuos orgánicos, inorgánicos y peligrosos, contribuyendo a un planeta más verde y limpio.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Visión</h3>
                  <p className="text-gray-600 text-sm">Ser el referente digital en soluciones de sostenibilidad, promoviendo una economía circular que beneficie al planeta y a la sociedad.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Valores</h3>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    <li>Sostenibilidad</li>
                    <li>Innovación</li>
                    <li>Comunidad</li>
                    <li>Transparencia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seccion de contacto */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para unirte?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a transformar tus hábitos y contribuir a un planeta más verde.
            </p>
            <a href="/contact" className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300">
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
