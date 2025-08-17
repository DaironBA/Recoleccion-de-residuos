import Nav from "../components/Nav"
import Footer from "../components/footer";

function Home() {
    return (
        <>
            <Nav />
            <main>
                {/* Hero Section */}
                <div className="relative bg-gray-200 py-20 text-center text-gray-800"
                    style={{
                        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/025/294/403/small/top-view-fresh-green-leaves-with-raindrops-texture-ai-generated-photo.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <div className="absolute inset-0 bg-white opacity-70"></div>
                    <div className="relative container mx-auto px-4 z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                            Transforma tu reciclaje en un hábito sostenible
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Únete a nuestra comunidad y deja que nos encarguemos de la recolección de tus residuos de manera eficiente y responsable.
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div id="servicios" className="py-20 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                            Ofrecemos un servicio de recolección especializado para cada tipo de residuo, garantizando su correcta gestión y tratamiento.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                                <img src="https://cdn-icons-png.flaticon.com/512/6593/6593775.png" alt="Icono de compostaje" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Residuos Orgánicos</h3>
                                <p className="text-gray-600 text-sm">Recolección semanal de tus residuos orgánicos para convertirlos en compost, un abono natural y libre de contaminantes.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                                <img src="https://thumbs.dreamstime.com/b/icono-inorg%C3%A1nico-de-reciclaje-reciclar-vector-iconos-org%C3%A1nicos-inorg%C3%A1nicos-s%C3%ADmbolo-o-signo-entorno-adecuado-269624131.jpg" alt="Icono de reciclaje" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Residuos Inorgánicos</h3>
                                <p className="text-gray-600 text-sm">Recolección programada o por demanda de papel, cartón, plástico, vidrio y metales. Los llevamos a plantas de reciclaje especializadas.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                                <img src="https://img.freepik.com/vector-gratis/ilustracion-grafica-signo-circulo-amarillo-biohazard_53876-8057.jpg" alt="Icono de residuos peligrosos" className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Residuos Peligrosos</h3>
                                <p className="text-gray-600 text-sm">Manejo seguro y responsable de baterías, pilas y aceites usados, en colaboración con empresas certificadas para su tratamiento.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div id="beneficios" className="py-20 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de Unirte</h2>
                        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                            Con nuestra plataforma, reciclar no solo es fácil, sino también gratificante. Por cada recolección, ganas puntos y ayudas al planeta.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="p-6 rounded-lg shadow-md border border-gray-200">
                                <img src="https://cdn-icons-png.flaticon.com/512/6213/6213188.png" alt="Icono de Puntos" className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Acumula Puntos</h3>
                                <p className="text-gray-600 text-sm">Gana puntos con cada recolección que puedes canjear por descuentos en tiendas asociadas.</p>
                            </div>
                            <div className="p-6 rounded-lg shadow-md border border-gray-200">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="Icono de Notificaciones" className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Notificaciones por WhatsApp</h3>
                                <p className="text-gray-600 text-sm">Recibe recordatorios y la hora de tu turno para que nunca te pierdas una recolección.</p>
                            </div>
                            <div className="p-6 rounded-lg shadow-md border border-gray-200">
                                <img src="https://cdn-icons-png.flaticon.com/512/4266/4266267.png" alt="Icono de Planeta" className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Ayuda al Planeta</h3>
                                <p className="text-gray-600 text-sm">Contribuye directamente a la reducción de residuos en vertederos y promueve la economía circular.</p>
                            </div>
                            <div className="p-6 rounded-lg shadow-md border border-gray-200">
                                <img src="https://cdn-icons-png.flaticon.com/512/9764/9764509.png" alt="Icono de Estadística" className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Reporte de Actividad</h3>
                                <p className="text-gray-600 text-sm">Accede a un historial detallado de tus recolecciones y el impacto positivo que has generado.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;