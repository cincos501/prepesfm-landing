import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  BarChart3, 
  TrendingUp, 
  Menu, 
  X, 
  Download,
  Shield,
  Award,
  ChevronLeft,
  ChevronRight,
  Mail,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Simulacros Reales",
      description: "Practica con exámenes que replican fielmente el formato oficial de admisión docente."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Reto de Resistencia",
      description: "Desafíate con 100 preguntas consecutivas para mejorar tu concentración y velocidad."
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Análisis de Resultados",
      description: "Obtén estadísticas detalladas de tu rendimiento por área y tipo de pregunta."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Historial de Evolución",
      description: "Monitorea tu progreso a lo largo del tiempo y visualiza tu mejora continua."
    }
  ];

  const screenshots = [
    { id: 1, alt: "Pantalla de inicio" },
    { id: 2, alt: "Simulacro en curso" },
    { id: 3, alt: "Resultados detallados" },
    { id: 4, alt: "Estadísticas" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold text-[#133c6d]">PrepESFM</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#133c6d] transition">
                Inicio
              </button>
              <button onClick={() => scrollToSection('caracteristicas')} className="text-gray-700 hover:text-[#133c6d] transition">
                Características
              </button>
              <button onClick={() => scrollToSection('capturas')} className="text-gray-700 hover:text-[#133c6d] transition">
                Capturas
              </button>
              <button onClick={() => scrollToSection('privacidad')} className="text-gray-700 hover:text-[#133c6d] transition">
                Privacidad
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 text-gray-700">
                Inicio
              </button>
              <button onClick={() => scrollToSection('caracteristicas')} className="block w-full text-left py-2 text-gray-700">
                Características
              </button>
              <button onClick={() => scrollToSection('capturas')} className="block w-full text-left py-2 text-gray-700">
                Capturas
              </button>
              <button onClick={() => scrollToSection('privacidad')} className="block w-full text-left py-2 text-gray-700">
                Privacidad
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#133c6d] leading-tight mb-6">
                Domina tu ingreso a la ESFM
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Prepárate con simulacros reales, analiza tu rendimiento y alcanza tu meta de convertirte en docente. La preparación inteligente empieza aquí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Google Play</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-[#133c6d] text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">App Store</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl aspect-[9/16] max-w-sm mx-auto flex items-center justify-center">
                  <div className="text-center p-8">
                    <Award className="w-24 h-24 mx-auto text-yellow-500 mb-4" />
                    <p className="text-gray-500">App Mockup</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-[#133c6d]">100%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#133c6d] mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas diseñadas para maximizar tu preparación y rendimiento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-yellow-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#133c6d] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="capturas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#133c6d] mb-4">
              Conoce la Aplicación
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una interfaz intuitiva diseñada para tu éxito
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl aspect-[9/16] max-w-sm mx-auto flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-gray-500 mb-2">{screenshots[currentSlide].alt}</p>
                  <p className="text-sm text-gray-400">Captura {currentSlide + 1} de {screenshots.length}</p>
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-6 h-6 text-[#133c6d]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-6 h-6 text-[#133c6d]" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    currentSlide === index ? 'bg-[#133c6d]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacidad" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-8">
              <Shield className="w-12 h-12 text-[#133c6d] mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#133c6d]">
                Política de Privacidad
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-[#133c6d] mb-3">1. Recopilación de Datos</h3>
                <p>
                  En PrepESFM nos tomamos muy en serio tu privacidad. Recopilamos únicamente la información necesaria para brindarte una experiencia personalizada y mejorar nuestros servicios. Los datos que podemos recopilar incluyen información de registro, historial de simulacros y preferencias de estudio.
                </p>
                <p className="mt-3 font-semibold text-[#133c6d]">
                  Compromiso: Nunca vendemos, alquilamos ni compartimos tus datos personales con terceros con fines comerciales.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#133c6d] mb-3">2. Uso de Datos</h3>
                <p>
                  La información recopilada se utiliza exclusivamente para proporcionar y mejorar los servicios de PrepESFM, incluyendo el análisis de tu rendimiento, la personalización de simulacros y la generación de estadísticas de progreso.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#133c6d] mb-3">3. Google AdMob</h3>
                <p>
                  PrepESFM utiliza Google AdMob para mostrar anuncios publicitarios que nos permiten ofrecer la aplicación de forma gratuita. AdMob puede recopilar cierta información del dispositivo para personalizar los anuncios, incluyendo identificadores publicitarios y datos de uso.
                </p>
                <p className="mt-3">
                  Puedes obtener más información sobre las prácticas de privacidad de Google AdMob en su política de privacidad: <a href="https://policies.google.com/privacy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#133c6d] mb-3">4. Tus Derechos</h3>
                <p>Como usuario de PrepESFM, tienes derecho a:</p>
                <ul className="mt-3 space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Acceder a tus datos personales almacenados en la aplicación</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Solicitar la corrección de información incorrecta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Solicitar la eliminación de tu cuenta y datos asociados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Optar por no recibir anuncios personalizados</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#133c6d] mb-3">5. Seguridad</h3>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún sistema de transmisión por internet es completamente seguro.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#133c6d] mb-3">6. Cambios en la Política</h3>
                <p>
                  Nos reservamos el derecho de actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos mediante la aplicación o por correo electrónico.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#133c6d]">
                <p className="font-semibold text-[#133c6d] mb-2">Contacto</p>
                <p>
                  Si tienes preguntas sobre nuestra política de privacidad o deseas ejercer tus derechos, contáctanos a través de los canales oficiales en el pie de página.
                </p>
              </div>

              <p className="text-sm text-gray-500 italic text-center mt-8">
                Última actualización: Enero 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#133c6d] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#133c6d]" />
                </div>
                <span className="text-2xl font-bold">PrepESFM</span>
              </div>
              <p className="text-blue-200">
                Tu aliado en el camino hacia la excelencia docente
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-blue-200">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-yellow-400 transition">Inicio</button></li>
                <li><button onClick={() => scrollToSection('caracteristicas')} className="hover:text-yellow-400 transition">Características</button></li>
                <li><button onClick={() => scrollToSection('privacidad')} className="hover:text-yellow-400 transition">Privacidad</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contáctanos</h4>
              <div className="space-y-3">
                <a href="mailto:contacto@prepesfm.com" className="flex items-center space-x-2 text-blue-200 hover:text-yellow-400 transition">
                  <Mail className="w-5 h-5" />
                  <span>contacto@prepesfm.com</span>
                </a>
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="hover:text-yellow-400 transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-yellow-400 transition">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="hover:text-yellow-400 transition">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
            <p>&copy; 2026 PrepESFM. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;