import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Importa tus imágenes desde la carpeta assets
import screen1 from './assets/captura-inicio.png';
import screen2 from './assets/captura-examen.png';
import screen3 from './assets/captura-resultados.png';
import screen4 from './assets/captura-stats.png';

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
    { id: 1, alt: "Pantalla de inicio", image: screen1 },
    { id: 2, alt: "Simulacro en curso", image: screen2 },
    { id: 3, alt: "Resultados detallados", image: screen3 },
    { id: 4, alt: "Estadísticas", image: screen4 }
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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold text-[#133c6d]">PrepESFM</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#133c6d] font-medium transition">Inicio</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="text-gray-700 hover:text-[#133c6d] font-medium transition">Características</button>
              <button onClick={() => scrollToSection('capturas')} className="text-gray-700 hover:text-[#133c6d] font-medium transition">Capturas</button>
              <button onClick={() => scrollToSection('privacidad')} className="text-gray-700 hover:text-[#133c6d] font-medium transition">Privacidad</button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 text-gray-700">Inicio</button>
              <button onClick={() => scrollToSection('caracteristicas')} className="block w-full text-left py-2 text-gray-700">Características</button>
              <button onClick={() => scrollToSection('capturas')} className="block w-full text-left py-2 text-gray-700">Capturas</button>
              <button onClick={() => scrollToSection('privacidad')} className="block w-full text-left py-2 text-gray-700">Privacidad</button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-[#133c6d] leading-tight mb-6">
                Domina tu ingreso a la ESFM
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Prepárate con simulacros reales, analiza tu rendimiento y alcanza tu meta de convertirte en docente. La preparación inteligente empieza aquí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition shadow-lg">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Google Play</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-[#133c6d] text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition shadow-lg">
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">App Store</span>
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              {/* Marco del dispositivo */}
              <div className="relative z-10 bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-slate-800 w-[300px] md:w-[350px]">
                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                  <img src={screen1} alt="App Preview" className="w-full h-full object-cover" />
                </div>
                {/* Notch simulado */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-3xl"></div>
              </div>
              
              {/* Círculo decorativo de fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-100 rounded-full blur-3xl -z-10"></div>
              
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center shadow-lg border-4 border-white z-20">
                <span className="text-3xl font-bold text-[#133c6d]">100%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#133c6d] mb-4">Características Principales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Herramientas diseñadas para maximizar tu preparación</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all"
              >
                <div className="text-yellow-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#133c6d] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="capturas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#133c6d] mb-4">Conoce la Interfaz</h2>
            <p className="text-xl text-gray-600">Fluida, intuitiva y enfocada en tu aprendizaje</p>
          </div>

          <div className="relative max-w-5xl mx-auto flex items-center justify-center">
            <button onClick={prevSlide} className="absolute left-0 md:-left-12 z-30 bg-white rounded-full p-4 shadow-xl hover:bg-slate-50 transition">
              <ChevronLeft className="w-8 h-8 text-[#133c6d]" />
            </button>

            <div className="relative w-[280px] md:w-[320px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl border-[6px] border-slate-800">
              <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5] relative">
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentSlide}
                    src={screenshots[currentSlide].image}
                    alt={screenshots[currentSlide].alt}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            <button onClick={nextSlide} className="absolute right-0 md:-right-12 z-30 bg-white rounded-full p-4 shadow-xl hover:bg-slate-50 transition">
              <ChevronRight className="w-8 h-8 text-[#133c6d]" />
            </button>
          </div>
          
          <div className="flex justify-center mt-10 space-x-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 transition-all rounded-full ${currentSlide === index ? 'w-8 bg-[#133c6d]' : 'w-2 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacidad" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <Shield className="w-16 h-16 text-[#133c6d] mb-4" />
            <h2 className="text-4xl font-bold text-[#133c6d]">Política de Privacidad</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 space-y-8 text-gray-700">
             <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="text-xl font-bold text-[#133c6d] mb-2">Compromiso de Seguridad</h3>
                <p>En PrepESFM no vendemos tus datos. Utilizamos la información solo para mejorar tu experiencia de estudio.</p>
             </div>
             <div>
                <h4 className="font-bold text-[#133c6d] mb-2 text-lg">1. Google AdMob</h4>
                <p>Usamos AdMob para mantener la app gratuita. Google puede usar identificadores de dispositivo para mostrarte anuncios relevantes.</p>
             </div>
             <div>
                <h4 className="font-bold text-[#133c6d] mb-2 text-lg">2. Tus Derechos</h4>
                <p>Puedes solicitar la eliminación de tu cuenta y todos tus datos de progreso en cualquier momento escribiéndonos al soporte.</p>
             </div>
             <p className="text-sm text-gray-400 text-center pt-4 border-t">Última actualización: Enero 2026</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#133c6d] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold">PrepESFM</span>
            </div>
            <p className="text-blue-200">Tu aliado estratégico para el ingreso a las Escuelas Superiores de Formación de Maestros.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Explorar</h4>
            <ul className="space-y-4 text-blue-100">
              <li><button onClick={() => scrollToSection('inicio')} className="hover:text-yellow-400 transition">Inicio</button></li>
              <li><button onClick={() => scrollToSection('caracteristicas')} className="hover:text-yellow-400 transition">Características</button></li>
              <li><button onClick={() => scrollToSection('capturas')} className="hover:text-yellow-400 transition">Capturas</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <div className="flex flex-col space-y-4">
              <a href="mailto:contacto@prepesfm.com" className="flex items-center space-x-3 text-blue-100 hover:text-yellow-400">
                <Mail className="w-5 h-5" />
                <span>contacto@prepesfm.com</span>
              </a>
              <div className="flex space-x-5 pt-4">
                <Facebook className="w-6 h-6 cursor-pointer hover:text-yellow-400" />
                <Twitter className="w-6 h-6 cursor-pointer hover:text-yellow-400" />
                <Instagram className="w-6 h-6 cursor-pointer hover:text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; 2026 PrepESFM. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;