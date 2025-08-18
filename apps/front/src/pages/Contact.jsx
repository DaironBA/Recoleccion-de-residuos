import Nav from "../components/Nav"
import Footer from "../components/footer";
import React, { useState } from 'react';
function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor o un servicio de correo
    console.log('Formulario enviado', { name, email, message });
    
    // Limpiar los campos del formulario
    setName('');
    setEmail('');
    setMessage('');
  };
    return (
    <>
      <Nav />
      <main className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contáctenos</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Sección de la Imagen (visible solo en pantallas medianas y grandes) */}
              <div className="hidden md:block">
                <img
                  src="https://pbs.twimg.com/media/F8F82zGWsAICujc.jpg"
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sección del Formulario de Contacto */}
              <div className="p-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                    <input
                      type="text"
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico:</label>
                    <input
                      type="email"
                      id="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje:</label>
                    <textarea
                      id="message"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
